import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The allocation type for this traffic target.
 */
export declare enum GoogleCloudRunV2TrafficTargetStatusTypeEnum {
    TrafficTargetAllocationTypeUnspecified = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED",
    TrafficTargetAllocationTypeLatest = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST",
    TrafficTargetAllocationTypeRevision = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
}
/**
 * Represents the observed state of a single `TrafficTarget` entry.
 */
export declare class GoogleCloudRunV2TrafficTargetStatus extends SpeakeasyBase {
    /**
     * Specifies percent of the traffic to this Revision.
     */
    percent?: number;
    /**
     * Revision to which this traffic is sent.
     */
    revision?: string;
    /**
     * Indicates the string used in the URI to exclusively reference this target.
     */
    tag?: string;
    /**
     * The allocation type for this traffic target.
     */
    type?: GoogleCloudRunV2TrafficTargetStatusTypeEnum;
    /**
     * Displays the target URI.
     */
    uri?: string;
}
