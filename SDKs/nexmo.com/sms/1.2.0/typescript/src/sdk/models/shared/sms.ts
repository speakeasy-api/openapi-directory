import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// Sms
/** 
 * Message sent
**/
export class Sms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message-count" })
  messageCount?: string;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages?: Message[];
}
