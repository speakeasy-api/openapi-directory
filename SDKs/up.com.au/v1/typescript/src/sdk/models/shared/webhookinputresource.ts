import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebhookInputResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// WebhookInputResource
/** 
 * Represents a webhook specified as request input.
 * 
**/
export class WebhookInputResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: WebhookInputResourceAttributes;
}
