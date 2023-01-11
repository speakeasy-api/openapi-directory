import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PostTargetsTargetIdKeys400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostTargetsTargetIdKeys401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdKeys403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdKeys404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdKeysPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ApiKeyInput;
}


export class PostTargetsTargetIdKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKey?: shared.ApiKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsTargetIdKeys400ApplicationJSONObject?: PostTargetsTargetIdKeys400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdKeys401ApplicationJSONObject?: PostTargetsTargetIdKeys401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdKeys403ApplicationJSONObject?: PostTargetsTargetIdKeys403ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdKeys404ApplicationJSONObject?: PostTargetsTargetIdKeys404ApplicationJson;
}
