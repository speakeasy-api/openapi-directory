package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRequest
 * A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
**/
public class HttpRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheFillBytes")
    public String cacheFillBytes;
    public HttpRequest withCacheFillBytes(String cacheFillBytes) {
        this.cacheFillBytes = cacheFillBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheHit")
    public Boolean cacheHit;
    public HttpRequest withCacheHit(Boolean cacheHit) {
        this.cacheHit = cacheHit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheLookup")
    public Boolean cacheLookup;
    public HttpRequest withCacheLookup(Boolean cacheLookup) {
        this.cacheLookup = cacheLookup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheValidatedWithOriginServer")
    public Boolean cacheValidatedWithOriginServer;
    public HttpRequest withCacheValidatedWithOriginServer(Boolean cacheValidatedWithOriginServer) {
        this.cacheValidatedWithOriginServer = cacheValidatedWithOriginServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public HttpRequest withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public String protocol;
    public HttpRequest withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referer")
    public String referer;
    public HttpRequest withReferer(String referer) {
        this.referer = referer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteIp")
    public String remoteIp;
    public HttpRequest withRemoteIp(String remoteIp) {
        this.remoteIp = remoteIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMethod")
    public String requestMethod;
    public HttpRequest withRequestMethod(String requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestSize")
    public String requestSize;
    public HttpRequest withRequestSize(String requestSize) {
        this.requestSize = requestSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestUrl")
    public String requestUrl;
    public HttpRequest withRequestUrl(String requestUrl) {
        this.requestUrl = requestUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseSize")
    public String responseSize;
    public HttpRequest withResponseSize(String responseSize) {
        this.responseSize = responseSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverIp")
    public String serverIp;
    public HttpRequest withServerIp(String serverIp) {
        this.serverIp = serverIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Integer status;
    public HttpRequest withStatus(Integer status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgent")
    public String userAgent;
    public HttpRequest withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}