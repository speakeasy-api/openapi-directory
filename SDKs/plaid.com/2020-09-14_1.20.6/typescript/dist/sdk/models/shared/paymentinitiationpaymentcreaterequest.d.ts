import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationPaymentCreateRequest defines the request schema for `/payment_initiation/payment/create`
**/
export declare class PaymentInitiationPaymentCreateRequest extends SpeakeasyBase {
    amount: Record<string, any>;
    clientId?: string;
    options?: Record<string, any>;
    recipientId: string;
    reference: string;
    schedule?: Record<string, any>;
    secret?: string;
}
