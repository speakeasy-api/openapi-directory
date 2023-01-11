package openapisdk.models.shared;


public enum ConversationMessageReceiptEnumDeliveryStatusEnum {
    READ("read"),
    FAILED("failed"),
    DELIVERED("delivered"),
    UNDELIVERED("undelivered"),
    SENT("sent");

    public final String value;

    private ConversationMessageReceiptEnumDeliveryStatusEnum(String value) {
        this.value = value;
    }
}
