import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allows to define a color (or a range of colors) that will be converted to transparent
 */
export declare class HtmlChromaKey extends SpeakeasyBase {
    /**
     * Set the color for which alpha will be set to 0 (full transparency)
     */
    color: string;
    /**
     * Makes the selection more or less sensitive to changes in color. A value of 1 will select only the provided color. A value of 100 will select all colors, so the full canvas
     */
    tolerance?: number;
}
/**
 * Crops the element
 */
export declare class HtmlCrop extends SpeakeasyBase {
    /**
     * Sets the height of the croping
     */
    height: number;
    /**
     * Sets the width of the croping
     */
    width: number;
    /**
     * Sets the left point of croping
     */
    x?: number;
    /**
     * Sets the top point of croping
     */
    y?: number;
}
/**
 * Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan
 */
export declare enum HtmlPanEnum {
    Left = "left",
    Top = "top",
    Right = "right",
    Bottom = "bottom",
    TopLeft = "top-left",
    TopRight = "top-right",
    BottomLeft = "bottom-left",
    BottomRight = "bottom-right"
}
/**
 * Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties
 */
export declare enum HtmlPositionEnum {
    TopLeft = "top-left",
    TopRight = "top-right",
    BottomRight = "bottom-right",
    BottomLeft = "bottom-left",
    CenterCenter = "center-center",
    Custom = "custom"
}
export declare class HtmlRotate extends SpeakeasyBase {
    /**
     * Sets the angle of rotation
     */
    angle: number;
    /**
     * Sets the time it takes to rotate the provided angle. A zero value means no movement
     */
    speed?: number;
}
export declare class HtmlScale extends SpeakeasyBase {
    /**
     * Sets the height for scaling the element
     */
    height?: number;
    /**
     * Sets the width for scaling the element
     */
    width?: number;
}
export declare enum HtmlTypeEnum {
    Html = "html"
}
/**
 * Creates a video recording or a screenshot of the provided HTML snippet
 */
export declare class Html extends SpeakeasyBase {
    /**
     * Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.
     */
    cache?: boolean;
    /**
     * Allows to define a color (or a range of colors) that will be converted to transparent
     */
    chromaKey?: HtmlChromaKey;
    /**
     * Used for adding your comments
     */
    comment?: string;
    /**
     * Crops the element
     */
    crop?: HtmlCrop;
    /**
     * Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.
     */
    duration?: number;
    /**
     * Element's time span added after the playback.
     */
    extraTime?: number;
    /**
     * Adds a fade in effect to the element. Value in seconds.
     */
    fadeIn?: number;
    /**
     * Adds a fade out effect to the element. Value in seconds.
     */
    fadeOut?: number;
    /**
     * Desired text element height. A value of <code>-1</code> means inherits scenes or movie height
     */
    height?: number;
    /**
     * HTML snippet to render. Compatible with HTML5, CSS3 and Javascript
     */
    html: string;
    /**
     * Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan
     */
    pan?: HtmlPanEnum;
    /**
     * Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties
     */
    position?: HtmlPositionEnum;
    rotate?: HtmlRotate;
    scale?: HtmlScale;
    /**
     * Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.
     */
    start?: number;
    /**
     * Enables usage of TailwindCSS for the HTML snippet
     */
    tailwindcss?: boolean;
    type: HtmlTypeEnum;
    /**
     * Desired text element width. A value of <code>-1</code> means inherits scenes or movie width
     */
    width?: number;
    /**
     * Sets the horizontal position of the element in the scene. The value <code>0</code> is on the left side
     */
    x?: number;
    /**
     * Sets the vertical position of the element in the scene. The value <code>0</code> is on the top side
     */
    y?: number;
    /**
     * Element's z-index. Use this property to reorganize the layering of the elements like in HTML
     */
    zIndex?: number;
    /**
     * Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the <code>pan</code> property to set the focus point of the zooming
     */
    zoom?: number;
}
