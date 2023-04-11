import { SpeakeasyBase } from "../../../internal/utils";
import { AnimationEnd } from "./animationend";
import { AnimationFade } from "./animationfade";
import { AnimationStatic } from "./animationstatic";
/**
 * Animation types.
 */
export declare class Animation extends SpeakeasyBase {
    /**
     * End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video.
     */
    animationEnd?: AnimationEnd;
    /**
     * Display overlay object with fade animation.
     */
    animationFade?: AnimationFade;
    /**
     * Display static overlay object.
     */
    animationStatic?: AnimationStatic;
}
