import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Disapproval reason.
 */
export declare enum DisplayNameDisapprovalReasonDisapprovalReasonEnum {
    DisapprovalReasonUnspecified = "DISAPPROVAL_REASON_UNSPECIFIED",
    Punctuation = "PUNCTUATION",
    MarketingLanguage = "MARKETING_LANGUAGE",
    LandingPageNotMatched = "LANDING_PAGE_NOT_MATCHED"
}
/**
 * Disapproval reason of the display name in a specific language.
 */
export declare class DisplayNameDisapprovalReason extends SpeakeasyBase {
    /**
     * Disapproval reason.
     */
    disapprovalReason?: DisplayNameDisapprovalReasonDisapprovalReasonEnum;
    /**
     * Language of the disapproved display name.
     */
    languageCode?: string;
}
