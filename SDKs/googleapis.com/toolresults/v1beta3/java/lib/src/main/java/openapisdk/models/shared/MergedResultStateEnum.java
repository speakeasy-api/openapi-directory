package openapisdk.models.shared;


public enum MergedResultStateEnum {
    UNKNOWN_STATE("unknownState"),
    PENDING("pending"),
    IN_PROGRESS("inProgress"),
    COMPLETE("complete");

    public final String value;

    private MergedResultStateEnum(String value) {
        this.value = value;
    }
}
