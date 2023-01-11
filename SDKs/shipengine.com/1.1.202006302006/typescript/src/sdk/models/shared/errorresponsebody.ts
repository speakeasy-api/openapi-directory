import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";



// ErrorResponseBody
/** 
 * An error response body
**/
export class ErrorResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors: ErrorT[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;
}
