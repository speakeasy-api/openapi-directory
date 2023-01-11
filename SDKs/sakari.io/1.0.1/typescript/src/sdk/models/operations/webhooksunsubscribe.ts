import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebhooksUnsubscribePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=url" })
  url: string;
}


export class WebhooksUnsubscribeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class WebhooksUnsubscribeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebhooksUnsubscribePathParams;

  @SpeakeasyMetadata()
  security: WebhooksUnsubscribeSecurity;
}


export class WebhooksUnsubscribeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
