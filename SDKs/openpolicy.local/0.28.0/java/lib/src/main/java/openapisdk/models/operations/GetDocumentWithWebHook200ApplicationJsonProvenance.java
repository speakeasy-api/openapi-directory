package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentWithWebHook200ApplicationJsonProvenance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_commit")
    public String buildCommit;
    public GetDocumentWithWebHook200ApplicationJsonProvenance withBuildCommit(String buildCommit) {
        this.buildCommit = buildCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_hostname")
    public String buildHostname;
    public GetDocumentWithWebHook200ApplicationJsonProvenance withBuildHostname(String buildHostname) {
        this.buildHostname = buildHostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_timestamp")
    public String buildTimestamp;
    public GetDocumentWithWebHook200ApplicationJsonProvenance withBuildTimestamp(String buildTimestamp) {
        this.buildTimestamp = buildTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundles")
    public java.util.Map<String, Object> bundles;
    public GetDocumentWithWebHook200ApplicationJsonProvenance withBundles(java.util.Map<String, Object> bundles) {
        this.bundles = bundles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public GetDocumentWithWebHook200ApplicationJsonProvenance withVersion(String version) {
        this.version = version;
        return this;
    }
}