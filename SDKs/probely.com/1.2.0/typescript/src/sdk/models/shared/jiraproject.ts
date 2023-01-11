import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JiraProject
/** 
 * Jira project.
**/
export class JiraProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
