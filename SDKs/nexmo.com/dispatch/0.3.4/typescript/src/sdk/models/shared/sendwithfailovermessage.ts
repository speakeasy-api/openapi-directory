import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailoverProperty } from "./failoverproperty";
import { FromProperty } from "./fromproperty";
import { MessageProperty } from "./messageproperty";
import { ToProperty } from "./toproperty";



// SendWithFailoverMessage
/** 
 * Send With Failover Message
**/
export class SendWithFailoverMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failover" })
  failover?: FailoverProperty;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: FromProperty;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: MessageProperty;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: ToProperty;
}
