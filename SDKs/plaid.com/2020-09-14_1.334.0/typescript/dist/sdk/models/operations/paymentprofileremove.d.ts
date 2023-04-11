import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentProfileRemoveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentProfileRemoveResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
