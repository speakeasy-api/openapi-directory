import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_type_id" })
  issueTypeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesPathParams;
}


export class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.JiraIssuePriority })
  jiraIssuePriorities?: shared.JiraIssuePriority[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson;
}
