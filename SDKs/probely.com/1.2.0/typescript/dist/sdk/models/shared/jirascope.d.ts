import { SpeakeasyBase } from "../../../internal/utils";
import { JiraPriorityMapping } from "./jiraprioritymapping";
import { JiraStatusMapping } from "./jirastatusmapping";
/**
 * Jira Cloud Target configuration
 */
export declare class JiraScope extends SpeakeasyBase {
    /**
     * Is this target allowed Jira integration.
     */
    allowJira?: boolean;
    /**
     * Automatically synchronise all findings to Jira issues.
     */
    autoSync?: boolean;
    /**
     * Id of the issue type to be created in Jira.
     */
    issueTypeId?: string;
    priorityMapping?: JiraPriorityMapping;
    /**
     * Id of the Jira project where issues for this target will be created.
     */
    projectId?: string;
    statusMapping?: JiraStatusMapping;
}
