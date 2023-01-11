package openapisdk.models.shared;


public enum StepStateEnum {
    UNKNOWN_STATE("unknownState"),
    PENDING("pending"),
    IN_PROGRESS("inProgress"),
    COMPLETE("complete");

    public final String value;

    private StepStateEnum(String value) {
        this.value = value;
    }
}
