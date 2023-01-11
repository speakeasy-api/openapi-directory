package openapisdk.models.shared;


public enum BuildEnumStatusEnum {
    BUILDING("building"),
    COMPLETED("completed"),
    FAILED("failed");

    public final String value;

    private BuildEnumStatusEnum(String value) {
        this.value = value;
    }
}
