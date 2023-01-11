import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostResetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


export class PostReset200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostReset400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class PostResetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostResetRequestBody;
}


export class PostResetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postReset200ApplicationJSONObject?: PostReset200ApplicationJson;

  @SpeakeasyMetadata()
  postReset400ApplicationJSONObject?: PostReset400ApplicationJson;
}
