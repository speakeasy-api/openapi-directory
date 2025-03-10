package openapisdk.utils;

import java.net.URI;
import java.net.http.HttpRequest;
import java.net.http.HttpRequest.BodyPublisher;
import java.net.http.HttpRequest.BodyPublishers;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.NameValuePair;
import org.apache.http.client.utils.URLEncodedUtils;

public class HTTPRequest {
    private String baseURL;
    private String method;
    private SerializedBody body;

    private List<NameValuePair> queryParams = new ArrayList<NameValuePair>();
    private Map<String, List<String>> headers = new HashMap<String, List<String>>();

    public HTTPRequest setMethod(String method) {
        this.method = method;
        return this;
    }

    public HTTPRequest setURL(String url) {
        this.baseURL = url;
        return this;
    }

    public HTTPRequest setBody(SerializedBody body) {
        this.body = body;
        return this;
    }

    public HTTPRequest addHeader(String key, String value) {
        List<String> headerValues = this.headers.get(key);
        if (headerValues == null) {
            headerValues = new ArrayList<String>();
        }

        headerValues.add(value);
        this.headers.put(key, headerValues);
        return this;
    }

    public HTTPRequest addQueryParam(NameValuePair param) {
        this.queryParams.add(param);
        return this;
    }

    public HttpRequest build() {
        HttpRequest.Builder requestBuilder = HttpRequest.newBuilder();

        BodyPublisher bodyPublisher = BodyPublishers.noBody();
        if (this.body != null) {
            bodyPublisher = this.body.body;
            requestBuilder.header("Content-Type", this.body.contentType);
        }

        requestBuilder.method(this.method, bodyPublisher);
        requestBuilder.uri(resolveURL());

        for (Map.Entry<String, List<String>> entry : this.headers.entrySet()) {
            for (String value : entry.getValue()) {
                requestBuilder.header(entry.getKey(), value);
            }
        }

        return requestBuilder.build();
    }

    private URI resolveURL() {
        String url = this.baseURL;
        if (this.queryParams != null && this.queryParams.size() > 0) {
            url += "?" + URLEncodedUtils.format(this.queryParams, StandardCharsets.UTF_8);
        }
        return URI.create(url);
    }
}