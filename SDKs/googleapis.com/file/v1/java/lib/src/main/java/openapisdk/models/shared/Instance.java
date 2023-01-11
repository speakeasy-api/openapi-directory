package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Instance
 * A Filestore instance.
**/
public class Instance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Instance withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Instance withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Instance withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileShares")
    public FileShareConfig[] fileShares;
    public Instance withFileShares(FileShareConfig[] fileShares) {
        this.fileShares = fileShares;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyName")
    public String kmsKeyName;
    public Instance withKmsKeyName(String kmsKeyName) {
        this.kmsKeyName = kmsKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Instance withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Instance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public NetworkConfig[] networks;
    public Instance withNetworks(NetworkConfig[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satisfiesPzs")
    public Boolean satisfiesPzs;
    public Instance withSatisfiesPzs(Boolean satisfiesPzs) {
        this.satisfiesPzs = satisfiesPzs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public InstanceStateEnum state;
    public Instance withState(InstanceStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public Instance withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspensionReasons")
    public InstanceSuspensionReasonsEnum[] suspensionReasons;
    public Instance withSuspensionReasons(InstanceSuspensionReasonsEnum[] suspensionReasons) {
        this.suspensionReasons = suspensionReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public InstanceTierEnum tier;
    public Instance withTier(InstanceTierEnum tier) {
        this.tier = tier;
        return this;
    }
}