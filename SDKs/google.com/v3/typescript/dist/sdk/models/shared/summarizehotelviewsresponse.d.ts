import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for HotelViewService.SummarizeHotelViews.
 */
export declare class SummarizeHotelViewsResponse extends SpeakeasyBase {
    /**
     * Timestamp of the last hotel feed submission.
     */
    lastFeedSubmissionTime?: string;
    /**
     * Timestamp of the last hotel manifest update.
     */
    lastManifestUpdateTime?: string;
    /**
     * The number of properties that are Live on Google.
     */
    liveOnGooglePropertyCount?: string;
    /**
     * The number of properties that match Google's manifest.
     */
    matchedPropertyCount?: string;
    /**
     * The number of hotels that are considered overclustered.
     */
    overclusteredPropertyCount?: string;
    /**
     * The number of overclustered properties that have data-related errors.
     */
    overclusteredPropertyWithErrorsCount?: string;
    /**
     * The number of properties that are considered unmatched.
     */
    unmatchedPropertyCount?: string;
    /**
     * The number of unmatched properties that have data-related errors.
     */
    unmatchedPropertyWithErrorsCount?: string;
}
