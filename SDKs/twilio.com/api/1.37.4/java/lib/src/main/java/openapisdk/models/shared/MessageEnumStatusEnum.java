package openapisdk.models.shared;


public enum MessageEnumStatusEnum {
    QUEUED("queued"),
    SENDING("sending"),
    SENT("sent"),
    FAILED("failed"),
    DELIVERED("delivered"),
    UNDELIVERED("undelivered"),
    RECEIVING("receiving"),
    RECEIVED("received"),
    ACCEPTED("accepted"),
    SCHEDULED("scheduled"),
    READ("read"),
    PARTIALLY_DELIVERED("partially_delivered"),
    CANCELED("canceled");

    public final String value;

    private MessageEnumStatusEnum(String value) {
        this.value = value;
    }
}
