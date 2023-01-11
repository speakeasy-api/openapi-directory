import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JiraIssuePriority
/** 
 * Jira issue priority.
**/
export class JiraIssuePriority extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
