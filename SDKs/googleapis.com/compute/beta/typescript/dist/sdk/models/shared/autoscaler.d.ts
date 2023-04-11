import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalerStatusDetails } from "./autoscalerstatusdetails";
import { AutoscalingPolicy } from "./autoscalingpolicy";
import { ScalingScheduleStatus } from "./scalingschedulestatus";
/**
 * [Output Only] The status of the autoscaler configuration. Current set of possible values: - PENDING: Autoscaler backend hasn't read new/updated configuration. - DELETING: Configuration is being deleted. - ACTIVE: Configuration is acknowledged to be effective. Some warnings might be present in the statusDetails field. - ERROR: Configuration has errors. Actionable for users. Details are present in the statusDetails field. New values might be added in the future.
 */
export declare enum AutoscalerStatusEnum {
    Active = "ACTIVE",
    Deleting = "DELETING",
    Error = "ERROR",
    Pending = "PENDING"
}
/**
 * Represents an Autoscaler resource. Google Compute Engine has two Autoscaler resources: * [Zonal](/compute/docs/reference/rest/beta/autoscalers) * [Regional](/compute/docs/reference/rest/beta/regionAutoscalers) Use autoscalers to automatically add or delete instances from a managed instance group according to your defined autoscaling policy. For more information, read Autoscaling Groups of Instances. For zonal managed instance groups resource, use the autoscaler resource. For regional managed instance groups, use the regionAutoscalers resource.
 */
export declare class Autoscaler extends SpeakeasyBase {
    /**
     * Cloud Autoscaler policy.
     */
    autoscalingPolicy?: AutoscalingPolicy;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#autoscaler for autoscalers.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * [Output Only] Target recommended MIG size (number of instances) computed by autoscaler. Autoscaler calculates the recommended MIG size even when the autoscaling policy mode is different from ON. This field is empty when autoscaler is not connected to an existing managed instance group or autoscaler did not generate its prediction.
     */
    recommendedSize?: number;
    /**
     * [Output Only] URL of the region where the instance group resides (for autoscalers living in regional scope).
     */
    region?: string;
    /**
     * [Output Only] Status information of existing scaling schedules.
     */
    scalingScheduleStatus?: Record<string, ScalingScheduleStatus>;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] The status of the autoscaler configuration. Current set of possible values: - PENDING: Autoscaler backend hasn't read new/updated configuration. - DELETING: Configuration is being deleted. - ACTIVE: Configuration is acknowledged to be effective. Some warnings might be present in the statusDetails field. - ERROR: Configuration has errors. Actionable for users. Details are present in the statusDetails field. New values might be added in the future.
     */
    status?: AutoscalerStatusEnum;
    /**
     * [Output Only] Human-readable details about the current state of the autoscaler. Read the documentation for Commonly returned status messages for examples of status messages you might encounter.
     */
    statusDetails?: AutoscalerStatusDetails[];
    /**
     * URL of the managed instance group that this autoscaler will scale. This field is required when creating an autoscaler.
     */
    target?: string;
    /**
     * [Output Only] URL of the zone where the instance group resides (for autoscalers living in zonal scope).
     */
    zone?: string;
}
