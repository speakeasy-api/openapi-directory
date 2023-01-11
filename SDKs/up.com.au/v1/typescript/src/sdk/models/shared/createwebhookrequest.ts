import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookInputResource } from "./webhookinputresource";



// CreateWebhookRequest
/** 
 * Request to create a new webhook. This currently only requires a `url`
 * attribute.
 * 
**/
export class CreateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: WebhookInputResource;
}
