import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object describing whether the image contains adult-oriented content and/or is racy.
 */
export declare class AdultInfo extends SpeakeasyBase {
    /**
     * Score from 0 to 1 that indicates how much the content is considered adult-oriented within the image.
     */
    adultScore?: number;
    /**
     * A value indicating if the image contains adult-oriented content.
     */
    isAdultContent?: boolean;
    /**
     * A value indicating if the image is racy.
     */
    isRacyContent?: boolean;
    /**
     * Score from 0 to 1 that indicates how suggestive is the image.
     */
    racyScore?: number;
}
