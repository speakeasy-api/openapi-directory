import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries } from "./googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseries";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats";
/**
 * The response for calculating conversation statistics.
 */
export declare class GoogleCloudContactcenterinsightsV1CalculateStatsResponse extends SpeakeasyBase {
    /**
     * The average duration of all conversations. The average is calculated using only conversations that have a time duration.
     */
    averageDuration?: string;
    /**
     * The average number of turns per conversation.
     */
    averageTurnCount?: number;
    /**
     * The total number of conversations.
     */
    conversationCount?: number;
    /**
     * A time series representing conversations over time.
     */
    conversationCountTimeSeries?: GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries;
    /**
     * A map associating each custom highlighter resource name with its respective number of matches in the set of conversations.
     */
    customHighlighterMatches?: Record<string, number>;
    /**
     * A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/` Deprecated, use `issue_matches_stats` field instead.
     */
    issueMatches?: Record<string, number>;
    /**
     * A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/`
     */
    issueMatchesStats?: Record<string, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats>;
    /**
     * A map associating each smart highlighter display name with its respective number of matches in the set of conversations.
     */
    smartHighlighterMatches?: Record<string, number>;
}
