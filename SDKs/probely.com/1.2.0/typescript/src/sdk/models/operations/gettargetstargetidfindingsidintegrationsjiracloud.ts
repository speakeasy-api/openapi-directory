import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams;
}


export class GetTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraFinding?: shared.JiraFinding;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson;
}
