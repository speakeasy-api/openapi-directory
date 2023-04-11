import { SpeakeasyBase } from "../../../internal/utils";
import { NamedPort } from "./namedport";
/**
 * [Output Only] The status of the instance.
 */
export declare enum InstanceWithNamedPortsStatusEnum {
    Deprovisioning = "DEPROVISIONING",
    Provisioning = "PROVISIONING",
    Repairing = "REPAIRING",
    Running = "RUNNING",
    Staging = "STAGING",
    Stopped = "STOPPED",
    Stopping = "STOPPING",
    Suspended = "SUSPENDED",
    Suspending = "SUSPENDING",
    Terminated = "TERMINATED"
}
export declare class InstanceWithNamedPorts extends SpeakeasyBase {
    /**
     * [Output Only] The URL of the instance.
     */
    instance?: string;
    /**
     * [Output Only] The named ports that belong to this instance group.
     */
    namedPorts?: NamedPort[];
    /**
     * [Output Only] The status of the instance.
     */
    status?: InstanceWithNamedPortsStatusEnum;
}
