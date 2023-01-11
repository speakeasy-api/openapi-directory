import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWebhookByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_id" })
  webhookId: string;
}


export class GetWebhookByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhookByIdPathParams;
}


export class GetWebhookByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getWebhookByIdResponseBody?: shared.GetWebhookByIdResponseBody;
}
