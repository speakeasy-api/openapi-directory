package openapisdk.models.shared;


public enum ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum {
    ACCEPTED("Accepted"),
    ACCEPTED_CANCELLATION_REQUEST("AcceptedCancellationRequest"),
    ACCEPTED_CREDIT_SETTLEMENT_COMPLETED("AcceptedCreditSettlementCompleted"),
    ACCEPTED_CUSTOMER_PROFILE("AcceptedCustomerProfile"),
    ACCEPTED_FUNDS_CHECKED("AcceptedFundsChecked"),
    ACCEPTED_SETTLEMENT_COMPLETED("AcceptedSettlementCompleted"),
    ACCEPTED_SETTLEMENT_IN_PROCESS("AcceptedSettlementInProcess"),
    ACCEPTED_TECHNICAL_VALIDATION("AcceptedTechnicalValidation"),
    ACCEPTED_WITH_CHANGE("AcceptedWithChange"),
    ACCEPTED_WITHOUT_POSTING("AcceptedWithoutPosting"),
    CANCELLED("Cancelled"),
    NO_CANCELLATION_PROCESS("NoCancellationProcess"),
    PARTIALLY_ACCEPTED_CANCELLATION_REQUEST("PartiallyAcceptedCancellationRequest"),
    PARTIALLY_ACCEPTED_TECHNICAL_CORRECT("PartiallyAcceptedTechnicalCorrect"),
    PAYMENT_CANCELLED("PaymentCancelled"),
    PENDING("Pending"),
    PENDING_CANCELLATION_REQUEST("PendingCancellationRequest"),
    RECEIVED("Received"),
    REJECTED("Rejected"),
    REJECTED_CANCELLATION_REQUEST("RejectedCancellationRequest");

    public final String value;

    private ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum(String value) {
        this.value = value;
    }
}
