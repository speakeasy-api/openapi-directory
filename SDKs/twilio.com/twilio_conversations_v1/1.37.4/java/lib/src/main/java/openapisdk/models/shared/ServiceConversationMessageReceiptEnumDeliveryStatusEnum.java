package openapisdk.models.shared;


public enum ServiceConversationMessageReceiptEnumDeliveryStatusEnum {
    READ("read"),
    FAILED("failed"),
    DELIVERED("delivered"),
    UNDELIVERED("undelivered"),
    SENT("sent");

    public final String value;

    private ServiceConversationMessageReceiptEnumDeliveryStatusEnum(String value) {
        this.value = value;
    }
}
