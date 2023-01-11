import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdIntegrationsJiraServer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdIntegrationsJiraServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdIntegrationsJiraServerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.JiraScope;
}


export class PatchTargetsTargetIdIntegrationsJiraServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraScope?: shared.JiraScope;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraServer401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraServer403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraServer404ApplicationJson;
}
