import { SpeakeasyBase } from "../../../internal/utils";
import { EstimationTimePoint } from "./estimationtimepoint";
/**
 * A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.
 */
export declare class UsageRateTimelineEntry extends SpeakeasyBase {
    /**
     * Represents a point in time.
     */
    effectiveTime?: EstimationTimePoint;
    /**
     * The usage rate.
     */
    usageRate?: number;
}
