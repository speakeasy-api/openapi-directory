package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Spoke
 * A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
**/
public class Spoke {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Spoke withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Spoke withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hub")
    public String hub;
    public Spoke withHub(String hub) {
        this.hub = hub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Spoke withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedInterconnectAttachments")
    public LinkedInterconnectAttachments linkedInterconnectAttachments;
    public Spoke withLinkedInterconnectAttachments(LinkedInterconnectAttachments linkedInterconnectAttachments) {
        this.linkedInterconnectAttachments = linkedInterconnectAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedRouterApplianceInstances")
    public LinkedRouterApplianceInstances linkedRouterApplianceInstances;
    public Spoke withLinkedRouterApplianceInstances(LinkedRouterApplianceInstances linkedRouterApplianceInstances) {
        this.linkedRouterApplianceInstances = linkedRouterApplianceInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedVpnTunnels")
    public LinkedVpnTunnels linkedVpnTunnels;
    public Spoke withLinkedVpnTunnels(LinkedVpnTunnels linkedVpnTunnels) {
        this.linkedVpnTunnels = linkedVpnTunnels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Spoke withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SpokeStateEnum state;
    public Spoke withState(SpokeStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueId")
    public String uniqueId;
    public Spoke withUniqueId(String uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Spoke withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}