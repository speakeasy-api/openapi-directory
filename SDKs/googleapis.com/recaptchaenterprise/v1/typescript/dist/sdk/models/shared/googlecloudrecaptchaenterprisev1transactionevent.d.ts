import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. The type of this transaction event.
 */
export declare enum GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum {
    TransactionEventTypeUnspecified = "TRANSACTION_EVENT_TYPE_UNSPECIFIED",
    MerchantApprove = "MERCHANT_APPROVE",
    MerchantDeny = "MERCHANT_DENY",
    ManualReview = "MANUAL_REVIEW",
    Authorization = "AUTHORIZATION",
    AuthorizationDecline = "AUTHORIZATION_DECLINE",
    PaymentCapture = "PAYMENT_CAPTURE",
    PaymentCaptureDecline = "PAYMENT_CAPTURE_DECLINE",
    Cancel = "CANCEL",
    ChargebackInquiry = "CHARGEBACK_INQUIRY",
    ChargebackAlert = "CHARGEBACK_ALERT",
    FraudNotification = "FRAUD_NOTIFICATION",
    Chargeback = "CHARGEBACK",
    ChargebackRepresentment = "CHARGEBACK_REPRESENTMENT",
    ChargebackReverse = "CHARGEBACK_REVERSE",
    RefundRequest = "REFUND_REQUEST",
    RefundDecline = "REFUND_DECLINE",
    Refund = "REFUND",
    RefundReverse = "REFUND_REVERSE"
}
/**
 * Describes an event in the lifecycle of a payment transaction.
 */
export declare class GoogleCloudRecaptchaenterpriseV1TransactionEvent extends SpeakeasyBase {
    /**
     * Optional. Timestamp when this transaction event occurred; otherwise assumed to be the time of the API call.
     */
    eventTime?: string;
    /**
     * Optional. The type of this transaction event.
     */
    eventType?: GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum;
    /**
     * Optional. The reason or standardized code that corresponds with this transaction event, if one exists. For example, a CHARGEBACK event with code 6005.
     */
    reason?: string;
    /**
     * Optional. The value that corresponds with this transaction event, if one exists. For example, a refund event where $5.00 was refunded. Currency is obtained from the original transaction data.
     */
    value?: number;
}
