import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";



// ErrorT
/** 
 * Error
**/
export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message-count" })
  messageCount?: string;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: ErrorMessage })
  messages?: ErrorMessage[];
}
