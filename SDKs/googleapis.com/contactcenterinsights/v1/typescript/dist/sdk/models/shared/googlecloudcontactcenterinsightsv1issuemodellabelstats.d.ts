import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats";
/**
 * Aggregated statistics about an issue model.
 */
export declare class GoogleCloudContactcenterinsightsV1IssueModelLabelStats extends SpeakeasyBase {
    /**
     * Number of conversations the issue model has analyzed at this point in time.
     */
    analyzedConversationsCount?: string;
    /**
     * Statistics on each issue. Key is the issue's resource name.
     */
    issueStats?: Record<string, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats>;
    /**
     * Number of analyzed conversations for which no issue was applicable at this point in time.
     */
    unclassifiedConversationsCount?: string;
}
