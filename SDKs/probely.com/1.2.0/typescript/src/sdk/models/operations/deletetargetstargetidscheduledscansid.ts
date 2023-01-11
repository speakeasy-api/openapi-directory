import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTargetsTargetIdScheduledscansIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class DeleteTargetsTargetIdScheduledscansId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsTargetIdScheduledscansId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTargetsTargetIdScheduledscansIdPathParams;
}


export class DeleteTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteTargetsTargetIdScheduledscansId401ApplicationJSONObject?: DeleteTargetsTargetIdScheduledscansId401ApplicationJson;

  @SpeakeasyMetadata()
  deleteTargetsTargetIdScheduledscansId403ApplicationJSONObject?: DeleteTargetsTargetIdScheduledscansId403ApplicationJson;
}
