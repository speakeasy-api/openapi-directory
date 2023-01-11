import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTargetsTargetIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PutTargetsTargetIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdIntegrationsJiraCloud404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTargetsTargetIdIntegrationsJiraCloudPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.JiraScope;
}


export class PutTargetsTargetIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraScope?: shared.JiraScope;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraCloud401ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraCloud403ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdIntegrationsJiraCloud404ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraCloud404ApplicationJson;
}
