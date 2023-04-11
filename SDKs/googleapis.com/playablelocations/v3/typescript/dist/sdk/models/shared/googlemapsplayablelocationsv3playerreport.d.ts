import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum {
    BadLocationReasonUnspecified = "BAD_LOCATION_REASON_UNSPECIFIED",
    Other = "OTHER",
    NotPedestrianAccessible = "NOT_PEDESTRIAN_ACCESSIBLE",
    NotOpenToPublic = "NOT_OPEN_TO_PUBLIC",
    PermanentlyClosed = "PERMANENTLY_CLOSED",
    TemporarilyInaccessible = "TEMPORARILY_INACCESSIBLE"
}
/**
 * A report submitted by a player about a playable location that is considered inappropriate for use in the game.
 */
export declare class GoogleMapsPlayablelocationsV3PlayerReport extends SpeakeasyBase {
    /**
     * Language code (in BCP-47 format) indicating the language of the freeform description provided in `reason_details`. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
    /**
     * Required. The name of the playable location.
     */
    locationName?: string;
    /**
     * Required. A free-form description detailing why the playable location is considered bad.
     */
    reasonDetails?: string;
    /**
     * Required. One or more reasons why this playable location is considered bad.
     */
    reasons?: GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum[];
}
