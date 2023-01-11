package openapisdk.models.shared;


public enum ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum {
    CANCELLED("Cancelled"),
    PENDING_FAILING_SETTLEMENT("PendingFailingSettlement"),
    PENDING_SETTLEMENT("PendingSettlement"),
    PROPRIETARY("Proprietary"),
    PROPRIETARY_REJECTION("ProprietaryRejection"),
    SUSPENDED("Suspended"),
    UNMATCHED("Unmatched");

    public final String value;

    private ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum(String value) {
        this.value = value;
    }
}
