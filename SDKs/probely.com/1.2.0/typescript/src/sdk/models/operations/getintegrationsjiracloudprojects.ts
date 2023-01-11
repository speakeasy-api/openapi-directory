import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsJiraCloudProjects401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraCloudProjects403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraCloudProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.JiraProject })
  jiraProjects?: shared.JiraProject[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrationsJiraCloudProjects401ApplicationJSONObject?: GetIntegrationsJiraCloudProjects401ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraCloudProjects403ApplicationJSONObject?: GetIntegrationsJiraCloudProjects403ApplicationJson;
}
