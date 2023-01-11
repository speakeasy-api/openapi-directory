import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats";
/**
 * Aggregated statistics about an issue model.
**/
export declare class GoogleCloudContactcenterinsightsV1IssueModelLabelStats extends SpeakeasyBase {
    analyzedConversationsCount?: string;
    issueStats?: Record<string, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats>;
    unclassifiedConversationsCount?: string;
}
