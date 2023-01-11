import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargets400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostTargets401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargets403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargets500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.TargetInput;
}


export class PostTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  target?: shared.Target;

  @SpeakeasyMetadata()
  postTargets400ApplicationJSONObject?: PostTargets400ApplicationJson;

  @SpeakeasyMetadata()
  postTargets401ApplicationJSONObject?: PostTargets401ApplicationJson;

  @SpeakeasyMetadata()
  postTargets403ApplicationJSONObject?: PostTargets403ApplicationJson;

  @SpeakeasyMetadata()
  postTargets500ApplicationJSONObject?: PostTargets500ApplicationJson;
}
