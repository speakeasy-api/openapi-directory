import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProjectWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostProjectWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;
}


export class PostProjectWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProjectWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostProjectWebhookRequestBody;
}


export class PostProjectWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  project?: shared.Project;

  @SpeakeasyMetadata()
  statusCode: number;
}
