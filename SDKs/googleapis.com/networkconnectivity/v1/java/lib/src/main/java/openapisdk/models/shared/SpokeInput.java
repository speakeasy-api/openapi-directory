package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpokeInput
 * A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
**/
public class SpokeInput {
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
    public LinkedInterconnectAttachmentsInput linkedInterconnectAttachments;
    public SpokeInput withLinkedInterconnectAttachments(LinkedInterconnectAttachmentsInput linkedInterconnectAttachments) {
        this.linkedInterconnectAttachments = linkedInterconnectAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedRouterApplianceInstances")
    public LinkedRouterApplianceInstancesInput linkedRouterApplianceInstances;
    public SpokeInput withLinkedRouterApplianceInstances(LinkedRouterApplianceInstancesInput linkedRouterApplianceInstances) {
        this.linkedRouterApplianceInstances = linkedRouterApplianceInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedVpnTunnels")
    public LinkedVpnTunnelsInput linkedVpnTunnels;
    public SpokeInput withLinkedVpnTunnels(LinkedVpnTunnelsInput linkedVpnTunnels) {
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
}