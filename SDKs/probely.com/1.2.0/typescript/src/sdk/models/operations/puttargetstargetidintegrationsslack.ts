import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTargetsTargetIdIntegrationsSlackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PutTargetsTargetIdIntegrationsSlack401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdIntegrationsSlack403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdIntegrationsSlack404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdIntegrationsSlackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTargetsTargetIdIntegrationsSlackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Slack;
}


export class PutTargetsTargetIdIntegrationsSlackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  slack?: shared.Slack;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putTargetsTargetIdIntegrationsSlack401ApplicationJSONObject?: PutTargetsTargetIdIntegrationsSlack401ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdIntegrationsSlack403ApplicationJSONObject?: PutTargetsTargetIdIntegrationsSlack403ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdIntegrationsSlack404ApplicationJSONObject?: PutTargetsTargetIdIntegrationsSlack404ApplicationJson;
}
