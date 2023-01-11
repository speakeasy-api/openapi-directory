package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionConfig
 * Execution configuration for a workload.
**/
public class ExecutionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleTtl")
    public String idleTtl;
    public ExecutionConfig withIdleTtl(String idleTtl) {
        this.idleTtl = idleTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKey")
    public String kmsKey;
    public ExecutionConfig withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTags")
    public String[] networkTags;
    public ExecutionConfig withNetworkTags(String[] networkTags) {
        this.networkTags = networkTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUri")
    public String networkUri;
    public ExecutionConfig withNetworkUri(String networkUri) {
        this.networkUri = networkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public ExecutionConfig withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetworkUri")
    public String subnetworkUri;
    public ExecutionConfig withSubnetworkUri(String subnetworkUri) {
        this.subnetworkUri = subnetworkUri;
        return this;
    }
}