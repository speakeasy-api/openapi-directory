import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationRecipientGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationRecipientGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
