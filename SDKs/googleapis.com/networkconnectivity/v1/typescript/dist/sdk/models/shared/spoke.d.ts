import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedInterconnectAttachments, LinkedInterconnectAttachmentsInput } from "./linkedinterconnectattachments";
import { LinkedRouterApplianceInstances, LinkedRouterApplianceInstancesInput } from "./linkedrouterapplianceinstances";
import { LinkedVpnTunnels, LinkedVpnTunnelsInput } from "./linkedvpntunnels";
/**
 * A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
 */
export declare class SpokeInput extends SpeakeasyBase {
    /**
     * An optional description of the spoke.
     */
    description?: string;
    /**
     * Immutable. The name of the hub that this spoke is attached to.
     */
    hub?: string;
    /**
     * Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
     */
    labels?: Record<string, string>;
    /**
     * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
     */
    linkedInterconnectAttachments?: LinkedInterconnectAttachmentsInput;
    /**
     * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
     */
    linkedRouterApplianceInstances?: LinkedRouterApplianceInstancesInput;
    /**
     * A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
     */
    linkedVpnTunnels?: LinkedVpnTunnelsInput;
    /**
     * Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}`
     */
    name?: string;
}
/**
 * Output only. The current lifecycle state of this spoke.
 */
export declare enum SpokeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
 */
export declare class Spoke extends SpeakeasyBase {
    /**
     * Output only. The time the spoke was created.
     */
    createTime?: string;
    /**
     * An optional description of the spoke.
     */
    description?: string;
    /**
     * Immutable. The name of the hub that this spoke is attached to.
     */
    hub?: string;
    /**
     * Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
     */
    labels?: Record<string, string>;
    /**
     * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
     */
    linkedInterconnectAttachments?: LinkedInterconnectAttachments;
    /**
     * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
     */
    linkedRouterApplianceInstances?: LinkedRouterApplianceInstances;
    /**
     * A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
     */
    linkedVpnTunnels?: LinkedVpnTunnels;
    /**
     * Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}`
     */
    name?: string;
    /**
     * Output only. The current lifecycle state of this spoke.
     */
    state?: SpokeStateEnum;
    /**
     * Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different unique_id.
     */
    uniqueId?: string;
    /**
     * Output only. The time the spoke was last updated.
     */
    updateTime?: string;
}
