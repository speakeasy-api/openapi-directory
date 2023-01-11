import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchTargetsId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PatchTargetsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.TargetInput;
}


export class PatchTargetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  target?: shared.Target;

  @SpeakeasyMetadata()
  patchTargetsId400ApplicationJSONObject?: PatchTargetsId400ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsId401ApplicationJSONObject?: PatchTargetsId401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsId403ApplicationJSONObject?: PatchTargetsId403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsId404ApplicationJSONObject?: PatchTargetsId404ApplicationJson;
}
