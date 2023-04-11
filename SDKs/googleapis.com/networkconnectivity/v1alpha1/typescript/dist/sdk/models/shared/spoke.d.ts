import { SpeakeasyBase } from "../../../internal/utils";
import { RouterApplianceInstance } from "./routerapplianceinstance";
/**
 * A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
 */
export declare class SpokeInput extends SpeakeasyBase {
    /**
     * The time when the Spoke was created.
     */
    createTime?: string;
    /**
     * Short description of the spoke resource
     */
    description?: string;
    /**
     * The resource URL of the hub resource that the spoke is attached to
     */
    hub?: string;
    /**
     * User-defined labels.
     */
    labels?: Record<string, string>;
    /**
     * The URIs of linked interconnect attachment resources
     */
    linkedInterconnectAttachments?: string[];
    /**
     * The URIs of linked Router appliance resources
     */
    linkedRouterApplianceInstances?: RouterApplianceInstance[];
    /**
     * The URIs of linked VPN tunnel resources
     */
    linkedVpnTunnels?: string[];
    /**
     * Immutable. The name of a Spoke resource.
     */
    name?: string;
    /**
     * The time when the Spoke was updated.
     */
    updateTime?: string;
}
/**
 * Output only. The current lifecycle state of this Hub.
 */
export declare enum SpokeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
 */
export declare class Spoke extends SpeakeasyBase {
    /**
     * The time when the Spoke was created.
     */
    createTime?: string;
    /**
     * Short description of the spoke resource
     */
    description?: string;
    /**
     * The resource URL of the hub resource that the spoke is attached to
     */
    hub?: string;
    /**
     * User-defined labels.
     */
    labels?: Record<string, string>;
    /**
     * The URIs of linked interconnect attachment resources
     */
    linkedInterconnectAttachments?: string[];
    /**
     * The URIs of linked Router appliance resources
     */
    linkedRouterApplianceInstances?: RouterApplianceInstance[];
    /**
     * The URIs of linked VPN tunnel resources
     */
    linkedVpnTunnels?: string[];
    /**
     * Immutable. The name of a Spoke resource.
     */
    name?: string;
    /**
     * Output only. The current lifecycle state of this Hub.
     */
    state?: SpokeStateEnum;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all Spoke resources. If a Spoke resource is deleted and another with the same name is created, it gets a different unique_id.
     */
    uniqueId?: string;
    /**
     * The time when the Spoke was updated.
     */
    updateTime?: string;
}
