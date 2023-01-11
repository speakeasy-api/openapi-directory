import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_type_id" })
  issueTypeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.JiraIssueStatus })
  jiraIssueStatuses?: shared.JiraIssueStatus[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson;
}
