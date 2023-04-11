import { SpeakeasyBase } from "../../../internal/utils";
import { NormalizedCoordinate } from "./normalizedcoordinate";
/**
 * Required. Type of fade animation: `FADE_IN` or `FADE_OUT`.
 */
export declare enum AnimationFadeFadeTypeEnum {
    FadeTypeUnspecified = "FADE_TYPE_UNSPECIFIED",
    FadeIn = "FADE_IN",
    FadeOut = "FADE_OUT"
}
/**
 * Display overlay object with fade animation.
 */
export declare class AnimationFade extends SpeakeasyBase {
    /**
     * The time to end the fade animation, in seconds. Default: `start_time_offset` + 1s
     */
    endTimeOffset?: string;
    /**
     * Required. Type of fade animation: `FADE_IN` or `FADE_OUT`.
     */
    fadeType?: AnimationFadeFadeTypeEnum;
    /**
     * The time to start the fade animation, in seconds. Default: 0
     */
    startTimeOffset?: string;
    /**
     * 2D normalized coordinates. Default: `{0.0, 0.0}`
     */
    xy?: NormalizedCoordinate;
}
