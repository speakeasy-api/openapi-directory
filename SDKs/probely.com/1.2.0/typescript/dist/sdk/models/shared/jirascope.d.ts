import { SpeakeasyBase } from "../../../internal/utils";
import { JiraPriorityMapping } from "./jiraprioritymapping";
import { JiraStatusMapping } from "./jirastatusmapping";
export declare class JiraScope extends SpeakeasyBase {
    allowJira?: boolean;
    autoSync?: boolean;
    issueTypeId?: string;
    priorityMapping?: JiraPriorityMapping;
    projectId?: string;
    statusMapping?: JiraStatusMapping;
}
