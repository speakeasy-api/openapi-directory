import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IntegrationFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=heroku" })
  heroku?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jira_cloud" })
  jiraCloud?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jira_server" })
  jiraServer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slack" })
  slack?: boolean;
}
