package openapisdk.utils;

import java.io.IOException;
import java.net.URISyntaxException;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.NameValuePair;

public class SpeakeasyHTTPSecurityClient
        implements HTTPClient {

    private HTTPClient client;

    private List<NameValuePair> queryParams = new ArrayList<NameValuePair>();
    private Map<String, List<String>> headers = new HashMap<String, List<String>>();

    public SpeakeasyHTTPSecurityClient(HTTPClient client) {
        this.client = client;
    }

    @Override
    public HttpResponse<byte[]> send(HTTPRequest request)
            throws IOException, InterruptedException, URISyntaxException {

        for (Map.Entry<String, List<String>> entry : this.headers.entrySet()) {
            for (String value : entry.getValue()) {
                request.addHeader(entry.getKey(), value);
            }
        }

        for (NameValuePair param : this.queryParams) {
            request.addQueryParam(param);
        }

        return this.client.send(request);
    }

    public void addHeader(String key, String value) {
        List<String> headerValues = this.headers.get(key);
        if (headerValues == null) {
            headerValues = new ArrayList<String>();
        }

        headerValues.add(value);
        this.headers.put(key, headerValues);
    }

    public void addQueryParam(NameValuePair param) {
        this.queryParams.add(param);
    }

}
