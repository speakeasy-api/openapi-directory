import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The transition in. Available transitions are:
 *
 * @remarks
 *   <ul>
 *     <li>`fade` - fade in</li>
 *     <li>`reveal` - reveal from left to right</li>
 *     <li>`wipeLeft` - fade across screen to the left</li>
 *     <li>`wipeRight` - fade across screen to the right</li>
 *     <li>`slideLeft` - move slightly left and fade in</li>
 *     <li>`slideRight` - move slightly right and fade in</li>
 *     <li>`slideUp` - move slightly up and fade in</li>
 *     <li>`slideDown` - move slightly down and fade in</li>
 *     <li>`carouselLeft` - slide in from right to left</li>
 *     <li>`carouselRight` - slide in from left to right</li>
 *     <li>`carouselUp` - slide in from bottom to top</li>
 *     <li>`carouselDown` - slide in from top to bottom</li>
 *     <li>`shuffleTopRight` - rotate in from top right</li>
 *     <li>`shuffleRightTop` - rotate in from right top</li>
 *     <li>`shuffleRightBottom` - rotate in from right bottom</li>
 *     <li>`shuffleBottomRight` - rotate in from bottom right</li>
 *     <li>`shuffleBottomLeft` - rotate in from bottom left</li>
 *     <li>`shuffleLeftBottom` - rotate in from left bottom</li>
 *     <li>`shuffleLeftTop` - rotate in from left top</li>
 *     <li>`shuffleTopLeft` - rotate in from top left</li>
 *     <li>`zoom` - fast zoom in</li>
 *   </ul>
 * The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
 */
export declare enum TransitionInEnum {
    Fade = "fade",
    FadeSlow = "fadeSlow",
    FadeFast = "fadeFast",
    Reveal = "reveal",
    RevealSlow = "revealSlow",
    RevealFast = "revealFast",
    WipeLeft = "wipeLeft",
    WipeLeftSlow = "wipeLeftSlow",
    WipeLeftFast = "wipeLeftFast",
    WipeRight = "wipeRight",
    WipeRightSlow = "wipeRightSlow",
    WipeRightFast = "wipeRightFast",
    SlideLeft = "slideLeft",
    SlideLeftSlow = "slideLeftSlow",
    SlideLeftFast = "slideLeftFast",
    SlideRight = "slideRight",
    SlideRightSlow = "slideRightSlow",
    SlideRightFast = "slideRightFast",
    SlideUp = "slideUp",
    SlideUpSlow = "slideUpSlow",
    SlideUpFast = "slideUpFast",
    SlideDown = "slideDown",
    SlideDownSlow = "slideDownSlow",
    SlideDownFast = "slideDownFast",
    CarouselLeft = "carouselLeft",
    CarouselLeftSlow = "carouselLeftSlow",
    CarouselLeftFast = "carouselLeftFast",
    CarouselRight = "carouselRight",
    CarouselRightSlow = "carouselRightSlow",
    CarouselRightFast = "carouselRightFast",
    CarouselUp = "carouselUp",
    CarouselUpSlow = "carouselUpSlow",
    CarouselUpFast = "carouselUpFast",
    CarouselDown = "carouselDown",
    CarouselDownSlow = "carouselDownSlow",
    CarouselDownFast = "carouselDownFast",
    ShuffleTopRight = "shuffleTopRight",
    ShuffleTopRightSlow = "shuffleTopRightSlow",
    ShuffleTopRightFast = "shuffleTopRightFast",
    ShuffleRightTop = "shuffleRightTop",
    ShuffleRightTopSlow = "shuffleRightTopSlow",
    ShuffleRightTopFast = "shuffleRightTopFast",
    ShuffleRightBottom = "shuffleRightBottom",
    ShuffleRightBottomSlow = "shuffleRightBottomSlow",
    ShuffleRightBottomFast = "shuffleRightBottomFast",
    ShuffleBottomRight = "shuffleBottomRight",
    ShuffleBottomRightSlow = "shuffleBottomRightSlow",
    ShuffleBottomRightFast = "shuffleBottomRightFast",
    ShuffleBottomLeft = "shuffleBottomLeft",
    ShuffleBottomLeftSlow = "shuffleBottomLeftSlow",
    ShuffleBottomLeftFast = "shuffleBottomLeftFast",
    ShuffleLeftBottom = "shuffleLeftBottom",
    ShuffleLeftBottomSlow = "shuffleLeftBottomSlow",
    ShuffleLeftBottomFast = "shuffleLeftBottomFast",
    ShuffleLeftTop = "shuffleLeftTop",
    ShuffleLeftTopSlow = "shuffleLeftTopSlow",
    ShuffleLeftTopFast = "shuffleLeftTopFast",
    ShuffleTopLeft = "shuffleTopLeft",
    ShuffleTopLeftSlow = "shuffleTopLeftSlow",
    ShuffleTopLeftFast = "shuffleTopLeftFast",
    Zoom = "zoom"
}
/**
 * The transition out. Available transitions are:
 *
 * @remarks
 *   <ul>
 *     <li>`fade` - fade out</li>
 *     <li>`reveal` - reveal from right to left</li>
 *     <li>`wipeLeft` - fade across screen to the left</li>
 *     <li>`wipeRight` - fade across screen to the right</li>
 *     <li>`slideLeft` - move slightly left and fade out</li>
 *     <li>`slideRight` - move slightly right and fade out</li>
 *     <li>`slideUp` - move slightly up and fade out</li>
 *     <li>`slideDown` - move slightly down and fade out</li>
 *     <li>`carouselLeft` - slide out from right to left</li>
 *     <li>`carouselRight` - slide out from left to right</li>
 *     <li>`carouselUp` - slide out from bottom to top</li>
 *     <li>`carouselDown` - slide out from top  to bottom</li>
 *     <li>`shuffleTopRight` - rotate out from top right</li>
 *     <li>`shuffleRightTop` - rotate out from right top</li>
 *     <li>`shuffleRightBottom` - rotate out from right bottom</li>
 *     <li>`shuffleBottomRight` - rotate out from bottom right</li>
 *     <li>`shuffleBottomLeft` - rotate out from bottom left</li>
 *     <li>`shuffleLeftBottom` - rotate out from left bottom</li>
 *     <li>`shuffleLeftTop` - rotate out from left top</li>
 *     <li>`shuffleTopLeft` - rotate out from top left</li>
 *     <li>`zoom` - fast zoom out</li>
 *   </ul>
 * The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
 */
export declare enum TransitionOutEnum {
    Fade = "fade",
    FadeSlow = "fadeSlow",
    FadeFast = "fadeFast",
    Reveal = "reveal",
    RevealSlow = "revealSlow",
    RevealFast = "revealFast",
    WipeLeft = "wipeLeft",
    WipeLeftSlow = "wipeLeftSlow",
    WipeLeftFast = "wipeLeftFast",
    WipeRight = "wipeRight",
    WipeRightSlow = "wipeRightSlow",
    WipeRightFast = "wipeRightFast",
    SlideLeft = "slideLeft",
    SlideLeftSlow = "slideLeftSlow",
    SlideLeftFast = "slideLeftFast",
    SlideRight = "slideRight",
    SlideRightSlow = "slideRightSlow",
    SlideRightFast = "slideRightFast",
    SlideUp = "slideUp",
    SlideUpSlow = "slideUpSlow",
    SlideUpFast = "slideUpFast",
    SlideDown = "slideDown",
    SlideDownSlow = "slideDownSlow",
    SlideDownFast = "slideDownFast",
    CarouselLeft = "carouselLeft",
    CarouselLeftSlow = "carouselLeftSlow",
    CarouselLeftFast = "carouselLeftFast",
    CarouselRight = "carouselRight",
    CarouselRightSlow = "carouselRightSlow",
    CarouselRightFast = "carouselRightFast",
    CarouselUp = "carouselUp",
    CarouselUpSlow = "carouselUpSlow",
    CarouselUpFast = "carouselUpFast",
    CarouselDown = "carouselDown",
    CarouselDownSlow = "carouselDownSlow",
    CarouselDownFast = "carouselDownFast",
    ShuffleTopRight = "shuffleTopRight",
    ShuffleTopRightSlow = "shuffleTopRightSlow",
    ShuffleTopRightFast = "shuffleTopRightFast",
    ShuffleRightTop = "shuffleRightTop",
    ShuffleRightTopSlow = "shuffleRightTopSlow",
    ShuffleRightTopFast = "shuffleRightTopFast",
    ShuffleRightBottom = "shuffleRightBottom",
    ShuffleRightBottomSlow = "shuffleRightBottomSlow",
    ShuffleRightBottomFast = "shuffleRightBottomFast",
    ShuffleBottomRight = "shuffleBottomRight",
    ShuffleBottomRightSlow = "shuffleBottomRightSlow",
    ShuffleBottomRightFast = "shuffleBottomRightFast",
    ShuffleBottomLeft = "shuffleBottomLeft",
    ShuffleBottomLeftSlow = "shuffleBottomLeftSlow",
    ShuffleBottomLeftFast = "shuffleBottomLeftFast",
    ShuffleLeftBottom = "shuffleLeftBottom",
    ShuffleLeftBottomSlow = "shuffleLeftBottomSlow",
    ShuffleLeftBottomFast = "shuffleLeftBottomFast",
    ShuffleLeftTop = "shuffleLeftTop",
    ShuffleLeftTopSlow = "shuffleLeftTopSlow",
    ShuffleLeftTopFast = "shuffleLeftTopFast",
    ShuffleTopLeft = "shuffleTopLeft",
    ShuffleTopLeftSlow = "shuffleTopLeftSlow",
    ShuffleTopLeftFast = "shuffleTopLeftFast",
    Zoom = "zoom"
}
/**
 * In and out transitions for a clip - i.e. fade in and fade out
 */
export declare class Transition extends SpeakeasyBase {
    /**
     * The transition in. Available transitions are:
     *
     * @remarks
     *   <ul>
     *     <li>`fade` - fade in</li>
     *     <li>`reveal` - reveal from left to right</li>
     *     <li>`wipeLeft` - fade across screen to the left</li>
     *     <li>`wipeRight` - fade across screen to the right</li>
     *     <li>`slideLeft` - move slightly left and fade in</li>
     *     <li>`slideRight` - move slightly right and fade in</li>
     *     <li>`slideUp` - move slightly up and fade in</li>
     *     <li>`slideDown` - move slightly down and fade in</li>
     *     <li>`carouselLeft` - slide in from right to left</li>
     *     <li>`carouselRight` - slide in from left to right</li>
     *     <li>`carouselUp` - slide in from bottom to top</li>
     *     <li>`carouselDown` - slide in from top to bottom</li>
     *     <li>`shuffleTopRight` - rotate in from top right</li>
     *     <li>`shuffleRightTop` - rotate in from right top</li>
     *     <li>`shuffleRightBottom` - rotate in from right bottom</li>
     *     <li>`shuffleBottomRight` - rotate in from bottom right</li>
     *     <li>`shuffleBottomLeft` - rotate in from bottom left</li>
     *     <li>`shuffleLeftBottom` - rotate in from left bottom</li>
     *     <li>`shuffleLeftTop` - rotate in from left top</li>
     *     <li>`shuffleTopLeft` - rotate in from top left</li>
     *     <li>`zoom` - fast zoom in</li>
     *   </ul>
     * The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
     */
    in?: TransitionInEnum;
    /**
     * The transition out. Available transitions are:
     *
     * @remarks
     *   <ul>
     *     <li>`fade` - fade out</li>
     *     <li>`reveal` - reveal from right to left</li>
     *     <li>`wipeLeft` - fade across screen to the left</li>
     *     <li>`wipeRight` - fade across screen to the right</li>
     *     <li>`slideLeft` - move slightly left and fade out</li>
     *     <li>`slideRight` - move slightly right and fade out</li>
     *     <li>`slideUp` - move slightly up and fade out</li>
     *     <li>`slideDown` - move slightly down and fade out</li>
     *     <li>`carouselLeft` - slide out from right to left</li>
     *     <li>`carouselRight` - slide out from left to right</li>
     *     <li>`carouselUp` - slide out from bottom to top</li>
     *     <li>`carouselDown` - slide out from top  to bottom</li>
     *     <li>`shuffleTopRight` - rotate out from top right</li>
     *     <li>`shuffleRightTop` - rotate out from right top</li>
     *     <li>`shuffleRightBottom` - rotate out from right bottom</li>
     *     <li>`shuffleBottomRight` - rotate out from bottom right</li>
     *     <li>`shuffleBottomLeft` - rotate out from bottom left</li>
     *     <li>`shuffleLeftBottom` - rotate out from left bottom</li>
     *     <li>`shuffleLeftTop` - rotate out from left top</li>
     *     <li>`shuffleTopLeft` - rotate out from top left</li>
     *     <li>`zoom` - fast zoom out</li>
     *   </ul>
     * The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
     */
    out?: TransitionOutEnum;
}
