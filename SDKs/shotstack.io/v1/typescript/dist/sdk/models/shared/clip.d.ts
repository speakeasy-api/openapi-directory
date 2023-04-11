import { SpeakeasyBase } from "../../../internal/utils";
import { Offset } from "./offset";
import { Transition } from "./transition";
/**
 * A motion effect to apply to the Clip. <ul>
 *
 * @remarks
 *   <li>`zoomIn` - slow zoom in</li>
 *   <li>`zoomOut` - slow zoom out</li>
 *   <li>`slideLeft` - slow slide (pan) left</li>
 *   <li>`slideRight` - slow slide (pan) right</li>
 *   <li>`slideUp` - slow slide (pan) up</li>
 *   <li>`slideDown` - slow slide (pan) down</li>
 * </ul>
 */
export declare enum ClipEffectEnum {
    ZoomIn = "zoomIn",
    ZoomOut = "zoomOut",
    SlideLeft = "slideLeft",
    SlideRight = "slideRight",
    SlideUp = "slideUp",
    SlideDown = "slideDown"
}
/**
 * A filter effect to apply to the Clip. <ul>
 *
 * @remarks
 *   <li>`boost` - boost contrast and saturation</li>
 *   <li>`contrast` - increase contrast</li>
 *   <li>`darken` - darken the scene</li>
 *   <li>`greyscale` - remove colour</li>
 *   <li>`lighten` - lighten the scene</li>
 *   <li>`muted` - reduce saturation and contrast</li>
 *   <li>`invert` - invert colors</li>
 * </ul>
 */
export declare enum ClipFilterEnum {
    Boost = "boost",
    Contrast = "contrast",
    Darken = "darken",
    Greyscale = "greyscale",
    Lighten = "lighten",
    Muted = "muted",
    Negative = "negative"
}
/**
 * Set how the asset should be scaled to fit the viewport using one of the following options:
 *
 * @remarks
 *   <ul>
 *     <li>`cover` - stretch the asset to fill the viewport without maintaining the aspect ratio.</li>
 *     <li>`contain` - fit the entire asset within the viewport while maintaining the original aspect ratio.</li>
 *     <li>`crop` - scale the asset to fill the viewport while maintaining the aspect ratio. The asset will be cropped if it exceeds the bounds of the viewport.</li>
 *     <li>`none` - preserves the original asset dimensions and does not apply any scaling.</li>
 *   </ul>
 */
export declare enum ClipFitEnum {
    Cover = "cover",
    Contain = "contain",
    Crop = "crop",
    None = "none"
}
/**
 * Place the asset in one of nine predefined positions of the viewport. This is most effective for when the asset is scaled and you want to position the element to a specific position. <ul>
 *
 * @remarks
 *   <li>`top` - top (center)</li>
 *   <li>`topRight` - top right</li>
 *   <li>`right` - right (center)</li>
 *   <li>`bottomRight` - bottom right</li>
 *   <li>`bottom` - bottom (center)</li>
 *   <li>`bottomLeft` - bottom left</li>
 *   <li>`left` - left (center)</li>
 *   <li>`topLeft` - top left</li>
 *   <li>`center` - center</li>
 * </ul>
 */
export declare enum ClipPositionEnum {
    Top = "top",
    TopRight = "topRight",
    Right = "right",
    BottomRight = "bottomRight",
    Bottom = "bottom",
    BottomLeft = "bottomLeft",
    Left = "left",
    TopLeft = "topLeft",
    Center = "center"
}
/**
 * A clip is a container for a specific type of asset, i.e. a title, image, video, audio or html. You use a Clip to define when an asset will display on the timeline, how long it will play for and transitions, filters and effects to apply to it.
 */
export declare class Clip extends SpeakeasyBase {
    /**
     * The type of asset to display for the duration of this Clip. Value must be one of <b>TitleAsset</b>, <b>ImageAsset</b>, <b>VideoAsset</b>, <b>HtmlAsset</b>, <b>AudioAsset</b> or <b>LumaAsset</b>
     */
    asset: any;
    /**
     * A motion effect to apply to the Clip. <ul>
     *
     * @remarks
     *   <li>`zoomIn` - slow zoom in</li>
     *   <li>`zoomOut` - slow zoom out</li>
     *   <li>`slideLeft` - slow slide (pan) left</li>
     *   <li>`slideRight` - slow slide (pan) right</li>
     *   <li>`slideUp` - slow slide (pan) up</li>
     *   <li>`slideDown` - slow slide (pan) down</li>
     * </ul>
     */
    effect?: ClipEffectEnum;
    /**
     * A filter effect to apply to the Clip. <ul>
     *
     * @remarks
     *   <li>`boost` - boost contrast and saturation</li>
     *   <li>`contrast` - increase contrast</li>
     *   <li>`darken` - darken the scene</li>
     *   <li>`greyscale` - remove colour</li>
     *   <li>`lighten` - lighten the scene</li>
     *   <li>`muted` - reduce saturation and contrast</li>
     *   <li>`invert` - invert colors</li>
     * </ul>
     */
    filter?: ClipFilterEnum;
    /**
     * Set how the asset should be scaled to fit the viewport using one of the following options:
     *
     * @remarks
     *   <ul>
     *     <li>`cover` - stretch the asset to fill the viewport without maintaining the aspect ratio.</li>
     *     <li>`contain` - fit the entire asset within the viewport while maintaining the original aspect ratio.</li>
     *     <li>`crop` - scale the asset to fill the viewport while maintaining the aspect ratio. The asset will be cropped if it exceeds the bounds of the viewport.</li>
     *     <li>`none` - preserves the original asset dimensions and does not apply any scaling.</li>
     *   </ul>
     */
    fit?: ClipFitEnum;
    /**
     * The length, in seconds, the Clip should play for.
     */
    length: number;
    /**
     * Offsets the position of an asset horizontally or vertically by a relative distance.
     */
    offset?: Offset;
    /**
     * Sets the opacity of the Clip where 1 is opaque and 0 is transparent.
     */
    opacity?: number;
    /**
     * Place the asset in one of nine predefined positions of the viewport. This is most effective for when the asset is scaled and you want to position the element to a specific position. <ul>
     *
     * @remarks
     *   <li>`top` - top (center)</li>
     *   <li>`topRight` - top right</li>
     *   <li>`right` - right (center)</li>
     *   <li>`bottomRight` - bottom right</li>
     *   <li>`bottom` - bottom (center)</li>
     *   <li>`bottomLeft` - bottom left</li>
     *   <li>`left` - left (center)</li>
     *   <li>`topLeft` - top left</li>
     *   <li>`center` - center</li>
     * </ul>
     */
    position?: ClipPositionEnum;
    /**
     * Scale the asset to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale asset to half the size of the viewport. This is useful for picture-in-picture video and  scaling images such as logos and watermarks.
     */
    scale?: number;
    /**
     * The start position of the Clip on the timeline, in seconds.
     */
    start: number;
    /**
     * In and out transitions for a clip - i.e. fade in and fade out
     */
    transition?: Transition;
}
