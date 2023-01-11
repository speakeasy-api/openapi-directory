package openapisdk.models.shared;


public enum BankTransferEventTypeEnum {
    PENDING("pending"),
    CANCELLED("cancelled"),
    FAILED("failed"),
    POSTED("posted"),
    REVERSED("reversed"),
    RECEIVER_PENDING("receiver_pending"),
    RECEIVER_POSTED("receiver_posted");

    public final String value;

    private BankTransferEventTypeEnum(String value) {
        this.value = value;
    }
}
