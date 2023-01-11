import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdIntegrationsSlackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdIntegrationsSlack401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdIntegrationsSlack403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdIntegrationsSlack404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdIntegrationsSlackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdIntegrationsSlackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Slack;
}


export class PatchTargetsTargetIdIntegrationsSlackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  slack?: shared.Slack;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchTargetsTargetIdIntegrationsSlack401ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsSlack401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdIntegrationsSlack403ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsSlack403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdIntegrationsSlack404ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsSlack404ApplicationJson;
}
