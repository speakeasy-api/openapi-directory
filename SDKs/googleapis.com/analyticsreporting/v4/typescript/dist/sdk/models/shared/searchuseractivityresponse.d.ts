import { SpeakeasyBase } from "../../../internal/utils";
import { UserActivitySession } from "./useractivitysession";
/**
 * The response from `userActivity:get` call.
 */
export declare class SearchUserActivityResponse extends SpeakeasyBase {
    /**
     * This token should be passed to [SearchUserActivityRequest](#SearchUserActivityRequest) to retrieve the next page.
     */
    nextPageToken?: string;
    /**
     * This field represents the [sampling rate](https://support.google.com/analytics/answer/2637192) for the given request and is a number between 0.0 to 1.0. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.
     */
    sampleRate?: number;
    /**
     * Each record represents a session (device details, duration, etc).
     */
    sessions?: UserActivitySession[];
    /**
     * Total rows returned by this query (across different pages).
     */
    totalRows?: number;
}
