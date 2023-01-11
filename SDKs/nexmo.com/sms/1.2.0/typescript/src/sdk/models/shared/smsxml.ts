import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// SmsXml
/** 
 * Message sent
**/
export class SmsXml extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Message })
  messages?: Message[];
}
