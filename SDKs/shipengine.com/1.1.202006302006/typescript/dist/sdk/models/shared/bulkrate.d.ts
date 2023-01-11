import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
import { ErrorSourceEnum } from "./errorsourceenum";
import { ErrorTypeEnum } from "./errortypeenum";
/**
 * The error structure that gets returned with almost all failed API calls
 *
**/
export declare class BulkRateError extends SpeakeasyBase {
    errorCode: ErrorCodeEnum;
    errorSource: ErrorSourceEnum;
    errorType: ErrorTypeEnum;
    message: string;
}
/**
 * A bulk rate
**/
export declare class BulkRate extends SpeakeasyBase {
    createdAt: Record<string, any>;
    errors: BulkRateError[];
    rateRequestId: Record<string, any>;
    shipmentId: Record<string, any>;
    status: Record<string, any>;
}
