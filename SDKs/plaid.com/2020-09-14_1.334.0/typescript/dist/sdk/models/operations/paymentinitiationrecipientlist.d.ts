import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentInitiationRecipientListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentInitiationRecipientListResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
