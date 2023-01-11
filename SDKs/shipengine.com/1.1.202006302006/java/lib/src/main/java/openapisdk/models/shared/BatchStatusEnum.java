package openapisdk.models.shared;


public enum BatchStatusEnum {
    OPEN("open"),
    QUEUED("queued"),
    PROCESSING("processing"),
    COMPLETED("completed"),
    COMPLETED_WITH_ERRORS("completed_with_errors"),
    ARCHIVED("archived"),
    NOTIFYING("notifying"),
    INVALID("invalid");

    public final String value;

    private BatchStatusEnum(String value) {
        this.value = value;
    }
}
