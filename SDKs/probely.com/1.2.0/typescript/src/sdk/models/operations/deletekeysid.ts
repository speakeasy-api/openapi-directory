import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteKeysId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteKeysId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class DeleteKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteKeysIdPathParams;
}


export class DeleteKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteKeysId401ApplicationJSONObject?: DeleteKeysId401ApplicationJson;

  @SpeakeasyMetadata()
  deleteKeysId403ApplicationJSONObject?: DeleteKeysId403ApplicationJson;
}
