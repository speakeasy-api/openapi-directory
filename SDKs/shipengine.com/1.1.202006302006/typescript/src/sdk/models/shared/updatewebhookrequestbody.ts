import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateWebhookRequestBody
/** 
 * An update webhook request body
**/
export class UpdateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: Record<string, any>;
}
