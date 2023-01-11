import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_type_id" })
  issueTypeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesPathParams;
}


export class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.JiraIssuePriority })
  jiraIssuePriorities?: shared.JiraIssuePriority[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson;

  @SpeakeasyMetadata()
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson;
}
