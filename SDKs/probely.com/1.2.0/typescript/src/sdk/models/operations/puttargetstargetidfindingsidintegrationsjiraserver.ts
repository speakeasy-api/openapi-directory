import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.JiraFinding;
}


export class PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraFinding?: shared.JiraFinding;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson;
}
