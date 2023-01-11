package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpCheck
 * Information involved in an HTTP/HTTPS Uptime check request.
**/
public class HttpCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceptedResponseStatusCodes")
    public ResponseStatusCode[] acceptedResponseStatusCodes;
    public HttpCheck withAcceptedResponseStatusCodes(ResponseStatusCode[] acceptedResponseStatusCodes) {
        this.acceptedResponseStatusCodes = acceptedResponseStatusCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authInfo")
    public BasicAuthentication authInfo;
    public HttpCheck withAuthInfo(BasicAuthentication authInfo) {
        this.authInfo = authInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public HttpCheck withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public HttpCheckContentTypeEnum contentType;
    public HttpCheck withContentType(HttpCheckContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public HttpCheck withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maskHeaders")
    public Boolean maskHeaders;
    public HttpCheck withMaskHeaders(Boolean maskHeaders) {
        this.maskHeaders = maskHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public HttpCheck withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pingConfig")
    public PingConfig pingConfig;
    public HttpCheck withPingConfig(PingConfig pingConfig) {
        this.pingConfig = pingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public HttpCheck withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMethod")
    public HttpCheckRequestMethodEnum requestMethod;
    public HttpCheck withRequestMethod(HttpCheckRequestMethodEnum requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useSsl")
    public Boolean useSsl;
    public HttpCheck withUseSsl(Boolean useSsl) {
        this.useSsl = useSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateSsl")
    public Boolean validateSsl;
    public HttpCheck withValidateSsl(Boolean validateSsl) {
        this.validateSsl = validateSsl;
        return this;
    }
}