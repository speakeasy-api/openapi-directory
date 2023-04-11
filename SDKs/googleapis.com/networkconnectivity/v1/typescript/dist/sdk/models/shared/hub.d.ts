import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingVPC, RoutingVPCInput } from "./routingvpc";
/**
 * Output only. The current lifecycle state of this hub.
 */
export declare enum HubStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * A Network Connectivity Center hub is a global management resource to which you attach spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the site-to-site data transfer feature, the resources associated with those spokes must all be in the same VPC network. Spokes that do not use site-to-site data transfer can be associated with any VPC network in your project.
 */
export declare class Hub extends SpeakeasyBase {
    /**
     * Output only. The time the hub was created.
     */
    createTime?: string;
    /**
     * An optional description of the hub.
     */
    description?: string;
    /**
     * Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
     */
    labels?: Record<string, string>;
    /**
     * Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}`
     */
    name?: string;
    /**
     * The VPC networks associated with this hub's spokes. This field is read-only. Network Connectivity Center automatically populates it based on the set of spokes attached to the hub.
     */
    routingVpcs?: RoutingVPC[];
    /**
     * Output only. The current lifecycle state of this hub.
     */
    state?: HubStateEnum;
    /**
     * Output only. The Google-generated UUID for the hub. This value is unique across all hub resources. If a hub is deleted and another with the same name is created, the new hub is assigned a different unique_id.
     */
    uniqueId?: string;
    /**
     * Output only. The time the hub was last updated.
     */
    updateTime?: string;
}
/**
 * A Network Connectivity Center hub is a global management resource to which you attach spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the site-to-site data transfer feature, the resources associated with those spokes must all be in the same VPC network. Spokes that do not use site-to-site data transfer can be associated with any VPC network in your project.
 */
export declare class HubInput extends SpeakeasyBase {
    /**
     * An optional description of the hub.
     */
    description?: string;
    /**
     * Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
     */
    labels?: Record<string, string>;
    /**
     * Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}`
     */
    name?: string;
    /**
     * The VPC networks associated with this hub's spokes. This field is read-only. Network Connectivity Center automatically populates it based on the set of spokes attached to the hub.
     */
    routingVpcs?: RoutingVPCInput[];
}
