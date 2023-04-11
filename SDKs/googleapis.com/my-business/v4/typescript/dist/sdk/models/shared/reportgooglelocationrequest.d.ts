import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason for which the user is reporting this location when the issue is with the location itself.
 */
export declare enum ReportGoogleLocationRequestReportReasonBadLocationEnum {
    BadLocationReasonUnspecified = "BAD_LOCATION_REASON_UNSPECIFIED",
    NotALocation = "NOT_A_LOCATION",
    PermanentlyClosed = "PERMANENTLY_CLOSED",
    DoesNotExist = "DOES_NOT_EXIST",
    Spam = "SPAM",
    NotABusiness = "NOT_A_BUSINESS",
    Moved = "MOVED",
    Duplicate = "DUPLICATE"
}
/**
 * The reason for which the user is reporting this location when the issue is with the recommendation. This report is useful if the location has been recommended to the Business Profile account.
 */
export declare enum ReportGoogleLocationRequestReportReasonBadRecommendationEnum {
    BadRecommendationReasonUnspecified = "BAD_RECOMMENDATION_REASON_UNSPECIFIED",
    NotAStoreFront = "NOT_A_STORE_FRONT",
    NotPartOfSuggestedChain = "NOT_PART_OF_SUGGESTED_CHAIN",
    Irrelevant = "IRRELEVANT"
}
/**
 * Request message for reporting a GoogleLocation.
 */
export declare class ReportGoogleLocationRequest extends SpeakeasyBase {
    /**
     * Optional. The resource name of the location group that this Google Location is being reported for, in the format `accounts/{account_id}`.
     */
    locationGroupName?: string;
    /**
     * The reason for which the user is reporting this location when the issue is with the location itself.
     */
    reportReasonBadLocation?: ReportGoogleLocationRequestReportReasonBadLocationEnum;
    /**
     * The reason for which the user is reporting this location when the issue is with the recommendation. This report is useful if the location has been recommended to the Business Profile account.
     */
    reportReasonBadRecommendation?: ReportGoogleLocationRequestReportReasonBadRecommendationEnum;
    /**
     * Optional. A text entry for elaborating on the reason for which the user is reporting this location. The maximum length is 512 characters.
     */
    reportReasonElaboration?: string;
    /**
     * Optional. The BCP 47 code of language used in `report_reason_elaboration`.
     */
    reportReasonLanguageCode?: string;
}
