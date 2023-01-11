import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSetpasswordRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confpassword" })
  confpassword: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}


export class PostSetpassword200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSetpassword400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class PostSetpasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostSetpasswordRequestBody;
}


export class PostSetpasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postSetpassword200ApplicationJSONObject?: PostSetpassword200ApplicationJson;

  @SpeakeasyMetadata()
  postSetpassword400ApplicationJSONObject?: PostSetpassword400ApplicationJson;
}
