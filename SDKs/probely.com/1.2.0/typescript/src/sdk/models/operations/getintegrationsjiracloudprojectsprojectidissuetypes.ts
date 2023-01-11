import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesPathParams;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.JiraIssueType })
  jiraIssueTypes?: shared.JiraIssueType[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJson;
}
