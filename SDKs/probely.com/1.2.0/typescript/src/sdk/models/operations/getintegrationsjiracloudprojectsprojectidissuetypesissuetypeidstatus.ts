import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_type_id" })
  issueTypeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.JiraIssueStatus })
  jiraIssueStatuses?: shared.JiraIssueStatus[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson;
}
