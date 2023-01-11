package openapisdk.models.shared;


public enum SmsStatusEnum {
    DELIVERED("delivered"),
    EXPIRED("expired"),
    FAILED("failed"),
    REJECTED("rejected"),
    ACCEPTED("accepted"),
    BUFFERED("buffered"),
    UNKNOWN("unknown");

    public final String value;

    private SmsStatusEnum(String value) {
        this.value = value;
    }
}
