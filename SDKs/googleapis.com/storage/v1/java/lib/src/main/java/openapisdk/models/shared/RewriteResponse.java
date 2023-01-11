package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RewriteResponse
 * A rewrite response.
**/
public class RewriteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("done")
    public Boolean done;
    public RewriteResponse withDone(Boolean done) {
        this.done = done;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RewriteResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectSize")
    public String objectSize;
    public RewriteResponse withObjectSize(String objectSize) {
        this.objectSize = objectSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public Object resource;
    public RewriteResponse withResource(Object resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rewriteToken")
    public String rewriteToken;
    public RewriteResponse withRewriteToken(String rewriteToken) {
        this.rewriteToken = rewriteToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalBytesRewritten")
    public String totalBytesRewritten;
    public RewriteResponse withTotalBytesRewritten(String totalBytesRewritten) {
        this.totalBytesRewritten = totalBytesRewritten;
        return this;
    }
}