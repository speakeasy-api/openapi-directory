import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdIntegrationsJiraCloud404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdIntegrationsJiraCloudPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.JiraScope;
}


export class PatchTargetsTargetIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jiraScope?: shared.JiraScope;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraCloud401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraCloud403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdIntegrationsJiraCloud404ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraCloud404ApplicationJson;
}
