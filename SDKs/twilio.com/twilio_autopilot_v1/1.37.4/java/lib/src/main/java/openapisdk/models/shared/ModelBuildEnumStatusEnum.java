package openapisdk.models.shared;


public enum ModelBuildEnumStatusEnum {
    ENQUEUED("enqueued"),
    BUILDING("building"),
    COMPLETED("completed"),
    FAILED("failed"),
    CANCELED("canceled");

    public final String value;

    private ModelBuildEnumStatusEnum(String value) {
        this.value = value;
    }
}
