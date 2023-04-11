import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * The state of the upgradeAppliance operation.
 */
export declare enum UpgradeStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}
/**
 * UpgradeStatus contains information about upgradeAppliance operation.
 */
export declare class UpgradeStatus extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * The version from which we upgraded.
     */
    previousVersion?: string;
    /**
     * The time the operation was started.
     */
    startTime?: string;
    /**
     * The state of the upgradeAppliance operation.
     */
    state?: UpgradeStatusStateEnum;
    /**
     * The version to upgrade to.
     */
    version?: string;
}
