package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InternalRangeInput
 * The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
**/
public class InternalRangeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public InternalRangeInput withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InternalRangeInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipCidrRange")
    public String ipCidrRange;
    public InternalRangeInput withIpCidrRange(String ipCidrRange) {
        this.ipCidrRange = ipCidrRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public InternalRangeInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InternalRangeInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public InternalRangeInput withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overlaps")
    public InternalRangeOverlapsEnum[] overlaps;
    public InternalRangeInput withOverlaps(InternalRangeOverlapsEnum[] overlaps) {
        this.overlaps = overlaps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peering")
    public InternalRangePeeringEnum peering;
    public InternalRangeInput withPeering(InternalRangePeeringEnum peering) {
        this.peering = peering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefixLength")
    public Integer prefixLength;
    public InternalRangeInput withPrefixLength(Integer prefixLength) {
        this.prefixLength = prefixLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCidrRange")
    public String[] targetCidrRange;
    public InternalRangeInput withTargetCidrRange(String[] targetCidrRange) {
        this.targetCidrRange = targetCidrRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public InternalRangeInput withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public InternalRangeUsageEnum usage;
    public InternalRangeInput withUsage(InternalRangeUsageEnum usage) {
        this.usage = usage;
        return this;
    }
}