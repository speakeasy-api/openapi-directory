import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingVpc } from "./routingvpc";
import { RoutingVpcInput } from "./routingvpc";
export declare enum HubStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * A Network Connectivity Center hub is a global management resource to which you attach spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the site-to-site data transfer feature, the resources associated with those spokes must all be in the same VPC network. Spokes that do not use site-to-site data transfer can be associated with any VPC network in your project.
**/
export declare class Hub extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Record<string, string>;
    name?: string;
    routingVpcs?: RoutingVpc[];
    state?: HubStateEnum;
    uniqueId?: string;
    updateTime?: string;
}
/**
 * A Network Connectivity Center hub is a global management resource to which you attach spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the site-to-site data transfer feature, the resources associated with those spokes must all be in the same VPC network. Spokes that do not use site-to-site data transfer can be associated with any VPC network in your project.
**/
export declare class HubInput extends SpeakeasyBase {
    description?: string;
    labels?: Record<string, string>;
    name?: string;
    routingVpcs?: RoutingVpcInput[];
}
