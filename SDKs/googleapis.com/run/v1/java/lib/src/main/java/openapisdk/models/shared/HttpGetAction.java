package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpGetAction
 * HTTPGetAction describes an action based on HTTP Get requests.
**/
public class HttpGetAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public HttpGetAction withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpHeaders")
    public HttpHeader[] httpHeaders;
    public HttpGetAction withHttpHeaders(HttpHeader[] httpHeaders) {
        this.httpHeaders = httpHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public HttpGetAction withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheme")
    public String scheme;
    public HttpGetAction withScheme(String scheme) {
        this.scheme = scheme;
        return this;
    }
}