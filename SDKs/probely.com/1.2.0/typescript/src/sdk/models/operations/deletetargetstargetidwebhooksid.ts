import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTargetsTargetIdWebhooksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class DeleteTargetsTargetIdWebhooksId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsTargetIdWebhooksId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsTargetIdWebhooksId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsTargetIdWebhooksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTargetsTargetIdWebhooksIdPathParams;
}


export class DeleteTargetsTargetIdWebhooksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteTargetsTargetIdWebhooksId401ApplicationJSONObject?: DeleteTargetsTargetIdWebhooksId401ApplicationJson;

  @SpeakeasyMetadata()
  deleteTargetsTargetIdWebhooksId403ApplicationJSONObject?: DeleteTargetsTargetIdWebhooksId403ApplicationJson;

  @SpeakeasyMetadata()
  deleteTargetsTargetIdWebhooksId404ApplicationJSONObject?: DeleteTargetsTargetIdWebhooksId404ApplicationJson;
}
