import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JiraIssueStatus
/** 
 * Jira issue status.
**/
export class JiraIssueStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
