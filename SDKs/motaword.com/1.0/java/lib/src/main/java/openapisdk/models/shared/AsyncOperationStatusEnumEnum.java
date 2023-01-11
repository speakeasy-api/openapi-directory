package openapisdk.models.shared;


public enum AsyncOperationStatusEnumEnum {
    SENT("sent"),
    STARTED("started"),
    COMPLETED("completed"),
    FAILED("failed");

    public final String value;

    private AsyncOperationStatusEnumEnum(String value) {
        this.value = value;
    }
}
