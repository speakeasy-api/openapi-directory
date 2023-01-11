import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.JiraIssueType })
  jiraIssueTypes?: shared.JiraIssueType[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson;
}
