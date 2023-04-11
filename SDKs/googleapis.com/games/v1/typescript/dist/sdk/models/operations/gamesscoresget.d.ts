import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesScoresGetSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The types of ranks to return. If the parameter is omitted, no ranks will be returned.
 */
export declare enum GamesScoresGetIncludeRankTypeEnum {
    IncludeRankTypeUnspecified = "INCLUDE_RANK_TYPE_UNSPECIFIED",
    All = "ALL",
    Public = "PUBLIC",
    Social = "SOCIAL",
    Friends = "FRIENDS"
}
/**
 * The time span for the scores and ranks you're requesting.
 */
export declare enum GamesScoresGetTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    All = "ALL",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
export declare class GamesScoresGetRequest extends SpeakeasyBase {
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
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The types of ranks to return. If the parameter is omitted, no ranks will be returned.
     */
    includeRankType?: GamesScoresGetIncludeRankTypeEnum;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
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
     * A player ID. A value of `me` may be used in place of the authenticated player's ID.
     */
    playerId: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The time span for the scores and ranks you're requesting.
     */
    timeSpan: GamesScoresGetTimeSpanEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class GamesScoresGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    playerLeaderboardScoreListResponse?: shared.PlayerLeaderboardScoreListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
