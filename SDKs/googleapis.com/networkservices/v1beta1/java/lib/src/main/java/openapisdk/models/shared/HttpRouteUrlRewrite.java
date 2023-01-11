package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteUrlRewrite
 * The specification for modifying the URL of the request, prior to forwarding the request to the destination.
**/
public class HttpRouteUrlRewrite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostRewrite")
    public String hostRewrite;
    public HttpRouteUrlRewrite withHostRewrite(String hostRewrite) {
        this.hostRewrite = hostRewrite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathPrefixRewrite")
    public String pathPrefixRewrite;
    public HttpRouteUrlRewrite withPathPrefixRewrite(String pathPrefixRewrite) {
        this.pathPrefixRewrite = pathPrefixRewrite;
        return this;
    }
}