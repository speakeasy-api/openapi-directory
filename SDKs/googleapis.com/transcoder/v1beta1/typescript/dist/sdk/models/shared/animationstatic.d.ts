import { SpeakeasyBase } from "../../../internal/utils";
import { NormalizedCoordinate } from "./normalizedcoordinate";
/**
 * Display static overlay object.
 */
export declare class AnimationStatic extends SpeakeasyBase {
    /**
     * The time to start displaying the overlay object, in seconds. Default: 0
     */
    startTimeOffset?: string;
    /**
     * 2D normalized coordinates. Default: `{0.0, 0.0}`
     */
    xy?: NormalizedCoordinate;
}
