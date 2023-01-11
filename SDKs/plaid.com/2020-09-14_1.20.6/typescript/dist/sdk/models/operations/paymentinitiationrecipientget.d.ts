import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentInitiationRecipientGetRequest extends SpeakeasyBase {
    request: shared.PaymentInitiationRecipientGetRequest;
}
export declare class PaymentInitiationRecipientGetResponse extends SpeakeasyBase {
    contentType: string;
    paymentInitiationRecipientGetResponse?: Record<string, any>;
    statusCode: number;
}
