import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
 */
export declare class AdStyleColors extends SpeakeasyBase {
    /**
     * The color of the ad background.
     */
    background?: string;
    /**
     * The color of the ad border.
     */
    border?: string;
    /**
     * The color of the ad text.
     */
    text?: string;
    /**
     * The color of the ad title.
     */
    title?: string;
    /**
     * The color of the ad url.
     */
    url?: string;
}
/**
 * The font which is included in the style.
 */
export declare class AdStyleFont extends SpeakeasyBase {
    /**
     * The family of the font.
     */
    family?: string;
    /**
     * The size of the font.
     */
    size?: string;
}
export declare class AdStyle extends SpeakeasyBase {
    /**
     * The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
     */
    colors?: AdStyleColors;
    /**
     * The style of the corners in the ad (deprecated: never populated, ignored).
     */
    corners?: string;
    /**
     * The font which is included in the style.
     */
    font?: AdStyleFont;
    /**
     * Kind this is, in this case adsense#adStyle.
     */
    kind?: string;
}
