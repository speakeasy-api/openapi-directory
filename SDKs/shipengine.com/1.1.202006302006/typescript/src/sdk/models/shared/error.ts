import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
import { ErrorSourceEnum } from "./errorsourceenum";
import { ErrorTypeEnum } from "./errortypeenum";



// ErrorT
/** 
 * The error structure that gets returned with almost all failed API calls
 * 
**/
export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode: ErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=error_source" })
  errorSource: ErrorSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=error_type" })
  errorType: ErrorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
