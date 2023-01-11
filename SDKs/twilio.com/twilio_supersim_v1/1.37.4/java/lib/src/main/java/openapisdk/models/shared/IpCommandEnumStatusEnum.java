package openapisdk.models.shared;


public enum IpCommandEnumStatusEnum {
    QUEUED("queued"),
    SENT("sent"),
    RECEIVED("received"),
    FAILED("failed");

    public final String value;

    private IpCommandEnumStatusEnum(String value) {
        this.value = value;
    }
}
