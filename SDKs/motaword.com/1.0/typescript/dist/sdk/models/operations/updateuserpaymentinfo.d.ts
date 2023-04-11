import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateUserPaymentInfoRequest extends SpeakeasyBase {
    paymentInfo?: shared.PaymentInfo;
    /**
     * User ID
     */
    userId: number;
}
export declare class UpdateUserPaymentInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * Successful operation
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
