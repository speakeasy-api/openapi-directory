import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
import { ErrorSourceEnum } from "./errorsourceenum";
import { ErrorTypeEnum } from "./errortypeenum";
/**
 * The error structure that gets returned with almost all failed API calls
 *
 * @remarks
 *
 */
export declare class BulkRateError extends SpeakeasyBase {
    errorCode: ErrorCodeEnum;
    errorSource: ErrorSourceEnum;
    errorType: ErrorTypeEnum;
    /**
     * An error message associated with the failed API call
     */
    message: string;
}
/**
 * The possible rate response status values
 */
export declare enum BulkRateRateResponseStatusEnum {
    Working = "working",
    Completed = "completed",
    Partial = "partial",
    Error = "error"
}
/**
 * A bulk rate
 */
export declare class BulkRate extends SpeakeasyBase {
    createdAt: Date;
    /**
     * An array of errors that were returned while retrieving the bulk rate
     */
    errors: BulkRateError[];
    /**
     * A string that uniquely identifies the rate request
     */
    rateRequestId: string;
    /**
     * A string that uniquely identifies the shipment
     */
    shipmentId: string;
    status: BulkRateRateResponseStatusEnum;
}
