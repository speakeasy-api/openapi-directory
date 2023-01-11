import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAuthPollRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class PostAuthPoll200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apikey" })
  apikey?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class PostAuthPollRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAuthPollRequestBody;
}


export class PostAuthPollResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAuthPoll200ApplicationJSONObject?: PostAuthPoll200ApplicationJson;
}
