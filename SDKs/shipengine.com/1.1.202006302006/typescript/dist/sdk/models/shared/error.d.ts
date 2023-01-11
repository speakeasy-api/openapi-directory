import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
import { ErrorSourceEnum } from "./errorsourceenum";
import { ErrorTypeEnum } from "./errortypeenum";
/**
 * The error structure that gets returned with almost all failed API calls
 *
**/
export declare class ErrorT extends SpeakeasyBase {
    errorCode: ErrorCodeEnum;
    errorSource: ErrorSourceEnum;
    errorType: ErrorTypeEnum;
    message: string;
}
