import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries } from "./googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseries";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats";
/**
 * The response for calculating conversation statistics.
**/
export declare class GoogleCloudContactcenterinsightsV1CalculateStatsResponse extends SpeakeasyBase {
    averageDuration?: string;
    averageTurnCount?: number;
    conversationCount?: number;
    conversationCountTimeSeries?: GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries;
    customHighlighterMatches?: Record<string, number>;
    issueMatches?: Record<string, number>;
    issueMatchesStats?: Record<string, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats>;
    smartHighlighterMatches?: Record<string, number>;
}
