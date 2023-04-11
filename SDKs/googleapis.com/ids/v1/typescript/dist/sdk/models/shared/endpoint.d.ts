import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Lowest threat severity that this endpoint will alert on.
 */
export declare enum EndpointSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Informational = "INFORMATIONAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
/**
 * Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
 */
export declare class EndpointInput extends SpeakeasyBase {
    /**
     * User-provided description of the endpoint
     */
    description?: string;
    /**
     * The labels of the endpoint.
     */
    labels?: Record<string, string>;
    /**
     * Required. The fully qualified URL of the network to which the IDS Endpoint is attached.
     */
    network?: string;
    /**
     * Required. Lowest threat severity that this endpoint will alert on.
     */
    severity?: EndpointSeverityEnum;
    /**
     * List of threat IDs to be excepted from generating alerts.
     */
    threatExceptions?: string[];
    /**
     * Whether the endpoint should report traffic logs in addition to threat logs.
     */
    trafficLogs?: boolean;
}
/**
 * Output only. Current state of the endpoint.
 */
export declare enum EndpointStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
 */
export declare class Endpoint extends SpeakeasyBase {
    /**
     * Output only. The create time timestamp.
     */
    createTime?: string;
    /**
     * User-provided description of the endpoint
     */
    description?: string;
    /**
     * Output only. The fully qualified URL of the endpoint's ILB Forwarding Rule.
     */
    endpointForwardingRule?: string;
    /**
     * Output only. The IP address of the IDS Endpoint's ILB.
     */
    endpointIp?: string;
    /**
     * The labels of the endpoint.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The name of the endpoint.
     */
    name?: string;
    /**
     * Required. The fully qualified URL of the network to which the IDS Endpoint is attached.
     */
    network?: string;
    /**
     * Required. Lowest threat severity that this endpoint will alert on.
     */
    severity?: EndpointSeverityEnum;
    /**
     * Output only. Current state of the endpoint.
     */
    state?: EndpointStateEnum;
    /**
     * List of threat IDs to be excepted from generating alerts.
     */
    threatExceptions?: string[];
    /**
     * Whether the endpoint should report traffic logs in addition to threat logs.
     */
    trafficLogs?: boolean;
    /**
     * Output only. The update time timestamp.
     */
    updateTime?: string;
}
