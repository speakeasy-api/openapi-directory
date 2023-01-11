import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventEnum } from "./webhookeventenum";



// Webhook
/** 
 * A webhook
**/
export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: WebhookEventEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=webhook_id" })
  webhookId?: Record<string, any>;
}
