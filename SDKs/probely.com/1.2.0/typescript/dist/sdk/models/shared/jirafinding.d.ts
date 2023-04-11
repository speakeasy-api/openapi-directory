import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Jira Cloud Finding configuration
 */
export declare class JiraFinding extends SpeakeasyBase {
    /**
     * Jira issue id connected to this finding
     */
    issueId?: string;
    /**
     * Selective sync active for this finding.
     */
    selectiveSync?: boolean;
}
