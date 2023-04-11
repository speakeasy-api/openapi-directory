import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserPaymentInfoRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class GetUserPaymentInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound UnauthorizedUser
     */
    error?: shared.ErrorT;
    /**
     * Returns billing and saved card information for user, and their corporate if present.
     */
    paymentInfo?: shared.PaymentInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
