import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePaymentTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationPaymentTokenCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
