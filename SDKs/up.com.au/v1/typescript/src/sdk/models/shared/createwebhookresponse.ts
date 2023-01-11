import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookResource } from "./webhookresource";



// CreateWebhookResponse
/** 
 * Successful response after creating a webhook.
 * 
**/
export class CreateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: WebhookResource;
}
