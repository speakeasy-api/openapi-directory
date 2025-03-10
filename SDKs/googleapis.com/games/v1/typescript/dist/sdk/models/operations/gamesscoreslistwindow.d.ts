import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesScoresListWindowSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The collection of scores you're requesting.
 */
export declare enum GamesScoresListWindowCollectionEnum {
    ScoreCollectionUnspecified = "SCORE_COLLECTION_UNSPECIFIED",
    Public = "PUBLIC",
    Social = "SOCIAL",
    Friends = "FRIENDS"
}
/**
 * The time span for the scores and ranks you're requesting.
 */
export declare enum GamesScoresListWindowTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
export declare class GamesScoresListWindowRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * The collection of scores you're requesting.
     */
    collection: GamesScoresListWindowCollectionEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the leaderboard.
     */
    leaderboardId: string;
    /**
     * The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
     */
    resultsAbove?: number;
    /**
     * True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
     */
    returnTopIfAbsent?: boolean;
    /**
     * The time span for the scores and ranks you're requesting.
     */
    timeSpan: GamesScoresListWindowTimeSpanEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class GamesScoresListWindowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    leaderboardScores?: shared.LeaderboardScores;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
