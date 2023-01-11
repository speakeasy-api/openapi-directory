import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTargetsTargetIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PutTargetsTargetIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdIntegrationsJiraServer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdIntegrationsJiraServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTargetsTargetIdIntegrationsJiraServerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.JiraScope;
}


export class PutTargetsTargetIdIntegrationsJiraServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraScope?: shared.JiraScope;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraServer401ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraServer403ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraServer404ApplicationJson;
}
