import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdFindingsIdIntegrationsJiraServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams;
}


export class GetTargetsTargetIdFindingsIdIntegrationsJiraServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraFinding?: shared.JiraFinding;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson;
}
