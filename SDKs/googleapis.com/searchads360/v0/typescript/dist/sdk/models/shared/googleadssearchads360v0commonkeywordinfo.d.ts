import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The match type of the keyword.
 */
export declare enum GoogleAdsSearchads360V0CommonKeywordInfoMatchTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Exact = "EXACT",
    Phrase = "PHRASE",
    Broad = "BROAD"
}
/**
 * A keyword criterion.
 */
export declare class GoogleAdsSearchads360V0CommonKeywordInfo extends SpeakeasyBase {
    /**
     * The match type of the keyword.
     */
    matchType?: GoogleAdsSearchads360V0CommonKeywordInfoMatchTypeEnum;
    /**
     * The text of the keyword (at most 80 characters and 10 words).
     */
    text?: string;
}
