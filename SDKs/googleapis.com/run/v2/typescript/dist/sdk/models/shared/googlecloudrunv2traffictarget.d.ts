import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The allocation type for this traffic target.
 */
export declare enum GoogleCloudRunV2TrafficTargetTypeEnum {
    TrafficTargetAllocationTypeUnspecified = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED",
    TrafficTargetAllocationTypeLatest = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST",
    TrafficTargetAllocationTypeRevision = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
}
/**
 * Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.
 */
export declare class GoogleCloudRunV2TrafficTarget extends SpeakeasyBase {
    /**
     * Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.
     */
    percent?: number;
    /**
     * Revision to which to send this portion of traffic, if traffic allocation is by revision.
     */
    revision?: string;
    /**
     * Indicates a string to be part of the URI to exclusively reference this target.
     */
    tag?: string;
    /**
     * The allocation type for this traffic target.
     */
    type?: GoogleCloudRunV2TrafficTargetTypeEnum;
}
