import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Webhook
/** 
 * A callback URL where events are posted
**/
export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
