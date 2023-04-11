import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Overall health status. Overall status is derived based on the status of each sub level resources.
 */
export declare enum GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum {
    HealthStatusUnspecified = "HEALTH_STATUS_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Unresponsive = "UNRESPONSIVE",
    Degraded = "DEGRADED"
}
/**
 * ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent
 */
export declare class GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo extends SpeakeasyBase {
    /**
     * Required. Unique Id for the resource.
     */
    id?: string;
    /**
     * Specific details for the resource. This is for internal use only.
     */
    resource?: Record<string, any>;
    /**
     * Overall health status. Overall status is derived based on the status of each sub level resources.
     */
    status?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;
    /**
     * List of Info for the sub level resources.
     */
    sub?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo[];
    /**
     * The timestamp to collect the info. It is suggested to be set by the topmost level resource only.
     */
    time?: string;
}
