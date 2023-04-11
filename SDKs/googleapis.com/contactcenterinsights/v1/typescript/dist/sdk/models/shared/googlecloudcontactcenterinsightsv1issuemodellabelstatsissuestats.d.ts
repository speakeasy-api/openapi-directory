import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Aggregated statistics about an issue.
 */
export declare class GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats extends SpeakeasyBase {
    /**
     * Display name of the issue.
     */
    displayName?: string;
    /**
     * Issue resource. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}
     */
    issue?: string;
    /**
     * Number of conversations attached to the issue at this point in time.
     */
    labeledConversationsCount?: string;
}
