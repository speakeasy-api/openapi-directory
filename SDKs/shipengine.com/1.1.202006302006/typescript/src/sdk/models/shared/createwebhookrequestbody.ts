import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventEnum } from "./webhookeventenum";



// CreateWebhookRequestBody
/** 
 * A create webhook request body
**/
export class CreateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: WebhookEventEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: Record<string, any>;
}
