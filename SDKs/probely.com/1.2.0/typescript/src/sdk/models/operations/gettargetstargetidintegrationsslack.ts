import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsTargetIdIntegrationsSlackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdIntegrationsSlack401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdIntegrationsSlack403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdIntegrationsSlackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdIntegrationsSlackPathParams;
}


export class GetTargetsTargetIdIntegrationsSlackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  slack?: shared.Slack;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdIntegrationsSlack401ApplicationJSONObject?: GetTargetsTargetIdIntegrationsSlack401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdIntegrationsSlack403ApplicationJSONObject?: GetTargetsTargetIdIntegrationsSlack403ApplicationJson;
}
