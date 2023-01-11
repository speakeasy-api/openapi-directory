import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTargetsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsIdPathParams;
}


export class GetTargetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  target?: shared.Target;

  @SpeakeasyMetadata()
  getTargetsId401ApplicationJSONObject?: GetTargetsId401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsId404ApplicationJSONObject?: GetTargetsId404ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsId500ApplicationJSONObject?: GetTargetsId500ApplicationJson;
}
