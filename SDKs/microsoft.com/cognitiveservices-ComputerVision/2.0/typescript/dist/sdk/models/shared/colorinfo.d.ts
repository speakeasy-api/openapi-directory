import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object providing additional metadata describing color attributes.
 */
export declare class ColorInfo extends SpeakeasyBase {
    /**
     * Possible accent color.
     */
    accentColor?: string;
    /**
     * Possible dominant background color.
     */
    dominantColorBackground?: string;
    /**
     * Possible dominant foreground color.
     */
    dominantColorForeground?: string;
    /**
     * An array of possible dominant colors.
     */
    dominantColors?: string[];
    /**
     * A value indicating if the image is black and white.
     */
    isBWImg?: boolean;
}
