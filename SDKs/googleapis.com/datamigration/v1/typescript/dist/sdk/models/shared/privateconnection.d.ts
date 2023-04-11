import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { VpcPeeringConfig } from "./vpcpeeringconfig";
/**
 * Output only. The state of the private connection.
 */
export declare enum PrivateConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Failed = "FAILED",
    Deleting = "DELETING",
    FailedToDelete = "FAILED_TO_DELETE",
    Deleted = "DELETED"
}
/**
 * The PrivateConnection resource is used to establish private connectivity with the customer's network.
 */
export declare class PrivateConnection extends SpeakeasyBase {
    /**
     * Output only. The create time of the resource.
     */
    createTime?: string;
    /**
     * The private connection display name.
     */
    displayName?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * The resource labels for private connections to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
     */
    labels?: Record<string, string>;
    /**
     * The name of the resource.
     */
    name?: string;
    /**
     * Output only. The state of the private connection.
     */
    state?: PrivateConnectionStateEnum;
    /**
     * Output only. The last update time of the resource.
     */
    updateTime?: string;
    /**
     * The VPC peering configuration is used to create VPC peering with the consumer's VPC.
     */
    vpcPeeringConfig?: VpcPeeringConfig;
}
/**
 * The PrivateConnection resource is used to establish private connectivity with the customer's network.
 */
export declare class PrivateConnectionInput extends SpeakeasyBase {
    /**
     * The private connection display name.
     */
    displayName?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * The resource labels for private connections to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
     */
    labels?: Record<string, string>;
    /**
     * The name of the resource.
     */
    name?: string;
    /**
     * The VPC peering configuration is used to create VPC peering with the consumer's VPC.
     */
    vpcPeeringConfig?: VpcPeeringConfig;
}
