import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { VpcPeeringConfig } from "./vpcpeeringconfig";
/**
 * Output only. The state of the Private Connection.
 */
export declare enum PrivateConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Failed = "FAILED",
    Deleting = "DELETING",
    FailedToDelete = "FAILED_TO_DELETE"
}
/**
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
 */
export declare class PrivateConnection extends SpeakeasyBase {
    /**
     * Output only. The create time of the resource.
     */
    createTime?: string;
    /**
     * Required. Display name.
     */
    displayName?: string;
    /**
     * Represent a user-facing Error.
     */
    error?: ErrorT;
    /**
     * Labels.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The resource's name.
     */
    name?: string;
    /**
     * Output only. The state of the Private Connection.
     */
    state?: PrivateConnectionStateEnum;
    /**
     * Output only. The update time of the resource.
     */
    updateTime?: string;
    /**
     * The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
     */
    vpcPeeringConfig?: VpcPeeringConfig;
}
/**
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
 */
export declare class PrivateConnectionInput extends SpeakeasyBase {
    /**
     * Required. Display name.
     */
    displayName?: string;
    /**
     * Represent a user-facing Error.
     */
    error?: ErrorT;
    /**
     * Labels.
     */
    labels?: Record<string, string>;
    /**
     * The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
     */
    vpcPeeringConfig?: VpcPeeringConfig;
}
