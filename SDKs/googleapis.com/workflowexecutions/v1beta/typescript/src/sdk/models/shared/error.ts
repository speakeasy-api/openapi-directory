import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackTrace } from "./stacktrace";



// ErrorT
/** 
 * Error describes why the execution was abnormally terminated.
**/
export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=stackTrace" })
  stackTrace?: StackTrace;
}
