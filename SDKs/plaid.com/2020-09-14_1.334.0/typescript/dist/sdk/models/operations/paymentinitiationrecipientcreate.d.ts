import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationRecipientCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationRecipientCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
