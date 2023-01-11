import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTargetsActivate400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostTargetsActivate401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsActivate403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsActivateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class PostTargetsActivateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsActivate400ApplicationJSONObject?: PostTargetsActivate400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsActivate401ApplicationJSONObject?: PostTargetsActivate401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsActivate403ApplicationJSONObject?: PostTargetsActivate403ApplicationJson;

  @SpeakeasyMetadata()
  targetIds?: string[];
}
