import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTargetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTargetsId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PutTargetsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTargetsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.TargetInput;
}


export class PutTargetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  target?: shared.Target;

  @SpeakeasyMetadata()
  putTargetsId400ApplicationJSONObject?: PutTargetsId400ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsId401ApplicationJSONObject?: PutTargetsId401ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsId403ApplicationJSONObject?: PutTargetsId403ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsId404ApplicationJSONObject?: PutTargetsId404ApplicationJson;
}
