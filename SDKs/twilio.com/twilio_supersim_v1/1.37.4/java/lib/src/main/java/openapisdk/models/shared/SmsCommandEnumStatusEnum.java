package openapisdk.models.shared;


public enum SmsCommandEnumStatusEnum {
    QUEUED("queued"),
    SENT("sent"),
    DELIVERED("delivered"),
    RECEIVED("received"),
    FAILED("failed");

    public final String value;

    private SmsCommandEnumStatusEnum(String value) {
        this.value = value;
    }
}
