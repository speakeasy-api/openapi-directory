import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentProfileCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentProfileCreateResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
