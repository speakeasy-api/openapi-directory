import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
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
     * The family of the font. Possible values are: ACCOUNT_DEFAULT_FAMILY, ADSENSE_DEFAULT_FAMILY, ARIAL, TIMES and VERDANA.
     */
    family?: string;
    /**
     * The size of the font. Possible values are: ACCOUNT_DEFAULT_SIZE, ADSENSE_DEFAULT_SIZE, SMALL, MEDIUM and LARGE.
     */
    size?: string;
}
export declare class AdStyle extends SpeakeasyBase {
    /**
     * The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
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
     * Kind this is, in this case adsensehost#adStyle.
     */
    kind?: string;
}
