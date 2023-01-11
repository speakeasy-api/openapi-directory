import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventEnum } from "./webhookeventenum";



// GetWebhookByIdResponseBody
/** 
 * A webhook
**/
export class GetWebhookByIdResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: WebhookEventEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=webhook_id" })
  webhookId: Record<string, any>;
}
