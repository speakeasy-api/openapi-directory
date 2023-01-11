import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FromProperty } from "./fromproperty";
import { MessageProperty } from "./messageproperty";
import { ToProperty } from "./toproperty";



// SendMessage
/** 
 * Send Message
**/
export class SendMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from: FromProperty;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: MessageProperty;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: ToProperty;
}
