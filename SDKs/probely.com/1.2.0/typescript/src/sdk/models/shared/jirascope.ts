import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JiraPriorityMapping } from "./jiraprioritymapping";
import { JiraStatusMapping } from "./jirastatusmapping";



export class JiraScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_jira" })
  allowJira?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_sync" })
  autoSync?: boolean;

  @SpeakeasyMetadata({ data: "json, name=issue_type_id" })
  issueTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=priority_mapping" })
  priorityMapping?: JiraPriorityMapping;

  @SpeakeasyMetadata({ data: "json, name=project_id" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=status_mapping" })
  statusMapping?: JiraStatusMapping;
}
