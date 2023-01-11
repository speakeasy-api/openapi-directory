import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTargetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteTargetsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteTargetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTargetsIdPathParams;
}


export class DeleteTargetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteTargetsId401ApplicationJSONObject?: DeleteTargetsId401ApplicationJson;

  @SpeakeasyMetadata()
  deleteTargetsId403ApplicationJSONObject?: DeleteTargetsId403ApplicationJson;

  @SpeakeasyMetadata()
  deleteTargetsId404ApplicationJSONObject?: DeleteTargetsId404ApplicationJson;
}
