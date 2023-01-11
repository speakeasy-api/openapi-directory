import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentInitiationPaymentGetRequest extends SpeakeasyBase {
    request: shared.PaymentInitiationPaymentGetRequest;
}
export declare class PaymentInitiationPaymentGetResponse extends SpeakeasyBase {
    contentType: string;
    paymentInitiationPaymentGetResponse?: Record<string, any>;
    statusCode: number;
}
