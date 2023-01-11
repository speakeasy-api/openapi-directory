package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpokeInput
 * A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
**/
public class SpokeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public SpokeInput withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SpokeInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hub")
    public String hub;
    public SpokeInput withHub(String hub) {
        this.hub = hub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public SpokeInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedInterconnectAttachments")
    public String[] linkedInterconnectAttachments;
    public SpokeInput withLinkedInterconnectAttachments(String[] linkedInterconnectAttachments) {
        this.linkedInterconnectAttachments = linkedInterconnectAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedRouterApplianceInstances")
    public RouterApplianceInstance[] linkedRouterApplianceInstances;
    public SpokeInput withLinkedRouterApplianceInstances(RouterApplianceInstance[] linkedRouterApplianceInstances) {
        this.linkedRouterApplianceInstances = linkedRouterApplianceInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedVpnTunnels")
    public String[] linkedVpnTunnels;
    public SpokeInput withLinkedVpnTunnels(String[] linkedVpnTunnels) {
        this.linkedVpnTunnels = linkedVpnTunnels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SpokeInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public SpokeInput withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}