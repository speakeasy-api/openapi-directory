package openapisdk.models.shared;


public enum BuildStatusEnumStatusEnum {
    BUILDING("building"),
    COMPLETED("completed"),
    FAILED("failed");

    public final String value;

    private BuildStatusEnumStatusEnum(String value) {
        this.value = value;
    }
}
