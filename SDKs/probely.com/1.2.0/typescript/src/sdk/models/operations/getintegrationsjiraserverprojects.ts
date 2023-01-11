import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsJiraServerProjects401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraServerProjects403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraServerProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.JiraProject })
  jiraProjects?: shared.JiraProject[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrationsJiraServerProjects401ApplicationJSONObject?: GetIntegrationsJiraServerProjects401ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraServerProjects403ApplicationJSONObject?: GetIntegrationsJiraServerProjects403ApplicationJson;
}
