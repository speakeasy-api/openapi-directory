package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeletePolicyModule200ApplicationJsonProvenance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_commit")
    public String buildCommit;
    public DeletePolicyModule200ApplicationJsonProvenance withBuildCommit(String buildCommit) {
        this.buildCommit = buildCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_hostname")
    public String buildHostname;
    public DeletePolicyModule200ApplicationJsonProvenance withBuildHostname(String buildHostname) {
        this.buildHostname = buildHostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_timestamp")
    public String buildTimestamp;
    public DeletePolicyModule200ApplicationJsonProvenance withBuildTimestamp(String buildTimestamp) {
        this.buildTimestamp = buildTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundles")
    public java.util.Map<String, Object> bundles;
    public DeletePolicyModule200ApplicationJsonProvenance withBundles(java.util.Map<String, Object> bundles) {
        this.bundles = bundles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public DeletePolicyModule200ApplicationJsonProvenance withVersion(String version) {
        this.version = version;
        return this;
    }
}