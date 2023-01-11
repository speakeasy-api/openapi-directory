package openapisdk.models.shared;


public enum CommandEnumStatusEnum {
    QUEUED("queued"),
    SENT("sent"),
    DELIVERED("delivered"),
    RECEIVED("received"),
    FAILED("failed");

    public final String value;

    private CommandEnumStatusEnum(String value) {
        this.value = value;
    }
}
