import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaymentRequestStateResponsePaymentRequestStateEnum {
    Created = "CREATED",
    Waiting = "WAITING",
    Executed = "EXECUTED",
    Invalid = "INVALID"
}
/**
 * OK
 */
export declare class PaymentRequestStateResponse extends SpeakeasyBase {
    paymentRequestState: PaymentRequestStateResponsePaymentRequestStateEnum;
    requestId: string;
    txId?: string;
}
