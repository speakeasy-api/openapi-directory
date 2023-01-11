import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentInitiationRecipientCreateRequest extends SpeakeasyBase {
    request: shared.PaymentInitiationRecipientCreateRequest;
}
export declare class PaymentInitiationRecipientCreateResponse extends SpeakeasyBase {
    contentType: string;
    paymentInitiationRecipientCreateResponse?: Record<string, any>;
    statusCode: number;
}
