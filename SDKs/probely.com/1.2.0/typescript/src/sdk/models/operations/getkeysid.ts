import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetKeysId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetKeysId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetKeysIdPathParams;
}


export class GetKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKey?: shared.ApiKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getKeysId401ApplicationJSONObject?: GetKeysId401ApplicationJson;

  @SpeakeasyMetadata()
  getKeysId403ApplicationJSONObject?: GetKeysId403ApplicationJson;
}
