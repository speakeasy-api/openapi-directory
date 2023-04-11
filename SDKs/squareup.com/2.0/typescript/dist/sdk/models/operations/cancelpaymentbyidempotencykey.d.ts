import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelPaymentByIdempotencyKeySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CancelPaymentByIdempotencyKeyResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelPaymentByIdempotencyKeyResponse?: shared.CancelPaymentByIdempotencyKeyResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
