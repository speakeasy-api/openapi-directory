import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";



// ErrorResponse
/** 
 * Error response returned by all error conditions in Velo Services
**/
export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors?: ErrorT[];

  @SpeakeasyMetadata({ data: "json, name=httpStatusCode" })
  httpStatusCode?: number;
}
