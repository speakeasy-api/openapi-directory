import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the issue.
 */
export declare class GoogleCloudContactcenterinsightsV1IssueAssignment extends SpeakeasyBase {
    /**
     * Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then.
     */
    displayName?: string;
    /**
     * Resource name of the assigned issue.
     */
    issue?: string;
    /**
     * Score indicating the likelihood of the issue assignment. currently bounded on [0,1].
     */
    score?: number;
}
