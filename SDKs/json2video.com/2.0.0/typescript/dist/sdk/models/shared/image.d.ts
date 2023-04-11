import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allows to define a color (or a range of colors) that will be converted to transparent
 */
export declare class ImageChromaKey extends SpeakeasyBase {
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
export declare class ImageCrop extends SpeakeasyBase {
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
export declare enum ImagePanEnum {
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
export declare enum ImagePositionEnum {
    TopLeft = "top-left",
    TopRight = "top-right",
    BottomRight = "bottom-right",
    BottomLeft = "bottom-left",
    CenterCenter = "center-center",
    Custom = "custom"
}
export declare class ImageRotate extends SpeakeasyBase {
    /**
     * Sets the angle of rotation
     */
    angle: number;
    /**
     * Sets the time it takes to rotate the provided angle. A zero value means no movement
     */
    speed?: number;
}
export declare class ImageScale extends SpeakeasyBase {
    /**
     * Sets the height for scaling the element
     */
    height?: number;
    /**
     * Sets the width for scaling the element
     */
    width?: number;
}
export declare enum ImageTypeEnum {
    Image = "image"
}
export declare class Image extends SpeakeasyBase {
    /**
     * Allows to define a color (or a range of colors) that will be converted to transparent
     */
    chromaKey?: ImageChromaKey;
    /**
     * Crops the element
     */
    crop?: ImageCrop;
    /**
     * Pans the element to the specified direction. If <code>zoom</code> property is not specified, the effect is a non-zooming pan
     */
    pan?: ImagePanEnum;
    /**
     * Sets the element position in the scene. A value of 'custom' sets a custom position based on the provided 'x' and 'y' properties
     */
    position?: ImagePositionEnum;
    rotate?: ImageRotate;
    scale?: ImageScale;
    src?: string;
    type?: ImageTypeEnum;
    /**
     * Sets the horizontal position of the element in the scene. The value <code>0</code> is on the left side
     */
    x?: number;
    /**
     * Sets the vertical position of the element in the scene. The value <code>0</code> is on the top side
     */
    y?: number;
    /**
     * Zooms the element with the specified level percentage. Positive values zoom in, negative values zoom out, zero does not zoom. Zoom can be combined with the <code>pan</code> property to set the focus point of the zooming
     */
    zoom?: number;
}
