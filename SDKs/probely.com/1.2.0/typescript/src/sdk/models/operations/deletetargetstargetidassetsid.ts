import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTargetsTargetIdAssetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class DeleteTargetsTargetIdAssetsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsTargetIdAssetsId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsTargetIdAssetsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsTargetIdAssetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTargetsTargetIdAssetsIdPathParams;
}


export class DeleteTargetsTargetIdAssetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteTargetsTargetIdAssetsId401ApplicationJSONObject?: DeleteTargetsTargetIdAssetsId401ApplicationJson;

  @SpeakeasyMetadata()
  deleteTargetsTargetIdAssetsId403ApplicationJSONObject?: DeleteTargetsTargetIdAssetsId403ApplicationJson;

  @SpeakeasyMetadata()
  deleteTargetsTargetIdAssetsId404ApplicationJSONObject?: DeleteTargetsTargetIdAssetsId404ApplicationJson;
}
