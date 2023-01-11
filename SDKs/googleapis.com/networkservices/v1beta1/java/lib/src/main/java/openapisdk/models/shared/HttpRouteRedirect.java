package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteRedirect
 * The specification for redirecting traffic.
**/
public class HttpRouteRedirect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostRedirect")
    public String hostRedirect;
    public HttpRouteRedirect withHostRedirect(String hostRedirect) {
        this.hostRedirect = hostRedirect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpsRedirect")
    public Boolean httpsRedirect;
    public HttpRouteRedirect withHttpsRedirect(Boolean httpsRedirect) {
        this.httpsRedirect = httpsRedirect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathRedirect")
    public String pathRedirect;
    public HttpRouteRedirect withPathRedirect(String pathRedirect) {
        this.pathRedirect = pathRedirect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portRedirect")
    public Integer portRedirect;
    public HttpRouteRedirect withPortRedirect(Integer portRedirect) {
        this.portRedirect = portRedirect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefixRewrite")
    public String prefixRewrite;
    public HttpRouteRedirect withPrefixRewrite(String prefixRewrite) {
        this.prefixRewrite = prefixRewrite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseCode")
    public HttpRouteRedirectResponseCodeEnum responseCode;
    public HttpRouteRedirect withResponseCode(HttpRouteRedirectResponseCodeEnum responseCode) {
        this.responseCode = responseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripQuery")
    public Boolean stripQuery;
    public HttpRouteRedirect withStripQuery(Boolean stripQuery) {
        this.stripQuery = stripQuery;
        return this;
    }
}