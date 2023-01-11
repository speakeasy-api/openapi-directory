import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JiraIssueType
/** 
 * Jira issue type.
**/
export class JiraIssueType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
