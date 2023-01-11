import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";



// ErrorXml
/** 
 * Error
**/
export class ErrorXml extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ErrorMessage })
  messages?: ErrorMessage[];
}
