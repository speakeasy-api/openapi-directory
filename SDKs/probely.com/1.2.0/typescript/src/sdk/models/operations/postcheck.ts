import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCheckRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}


export class PostCheck200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostCheck400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class PostCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostCheckRequestBody;
}


export class PostCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postCheck200ApplicationJSONObject?: PostCheck200ApplicationJson;

  @SpeakeasyMetadata()
  postCheck400ApplicationJSONObject?: PostCheck400ApplicationJson;
}
