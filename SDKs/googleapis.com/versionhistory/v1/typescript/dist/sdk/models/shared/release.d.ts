import { SpeakeasyBase } from "../../../internal/utils";
import { Interval } from "./interval";
/**
 * A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version.
 */
export declare class Release extends SpeakeasyBase {
    /**
     * Rollout fraction. This fraction indicates the fraction of people that should receive this version in this release. If the fraction is not specified in ReleaseManager, the API will assume fraction is 1.
     */
    fraction?: number;
    /**
     * Rollout fraction group. Only fractions with the same fraction_group are statistically comparable: there may be non-fractional differences between different fraction groups.
     */
    fractionGroup?: string;
    /**
     * Release name. Format is "{product}/platforms/{platform}/channels/{channel}/versions/{version}/releases/{release}"
     */
    name?: string;
    /**
     * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
     */
    serving?: Interval;
    /**
     * String containing just the version number. e.g. "84.0.4147.38"
     */
    version?: string;
}
