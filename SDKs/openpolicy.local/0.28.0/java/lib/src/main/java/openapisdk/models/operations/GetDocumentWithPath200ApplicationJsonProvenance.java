package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentWithPath200ApplicationJsonProvenance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_commit")
    public String buildCommit;
    public GetDocumentWithPath200ApplicationJsonProvenance withBuildCommit(String buildCommit) {
        this.buildCommit = buildCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_hostname")
    public String buildHostname;
    public GetDocumentWithPath200ApplicationJsonProvenance withBuildHostname(String buildHostname) {
        this.buildHostname = buildHostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_timestamp")
    public String buildTimestamp;
    public GetDocumentWithPath200ApplicationJsonProvenance withBuildTimestamp(String buildTimestamp) {
        this.buildTimestamp = buildTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundles")
    public java.util.Map<String, Object> bundles;
    public GetDocumentWithPath200ApplicationJsonProvenance withBundles(java.util.Map<String, Object> bundles) {
        this.bundles = bundles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public GetDocumentWithPath200ApplicationJsonProvenance withVersion(String version) {
        this.version = version;
        return this;
    }
}