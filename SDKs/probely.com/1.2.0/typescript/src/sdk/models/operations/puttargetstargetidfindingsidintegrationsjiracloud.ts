import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.JiraFinding;
}


export class PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraFinding?: shared.JiraFinding;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson;
}
