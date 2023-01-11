import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTargetsTargetIdKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class DeleteTargetsTargetIdKeysId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsTargetIdKeysId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsTargetIdKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTargetsTargetIdKeysIdPathParams;
}


export class DeleteTargetsTargetIdKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteTargetsTargetIdKeysId403ApplicationJSONObject?: DeleteTargetsTargetIdKeysId403ApplicationJson;

  @SpeakeasyMetadata()
  deleteTargetsTargetIdKeysId404ApplicationJSONObject?: DeleteTargetsTargetIdKeysId404ApplicationJson;
}
