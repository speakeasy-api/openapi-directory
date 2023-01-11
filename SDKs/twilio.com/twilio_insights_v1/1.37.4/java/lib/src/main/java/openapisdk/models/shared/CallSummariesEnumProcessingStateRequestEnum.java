package openapisdk.models.shared;


public enum CallSummariesEnumProcessingStateRequestEnum {
    COMPLETED("completed"),
    STARTED("started"),
    PARTIAL("partial"),
    ALL("all");

    public final String value;

    private CallSummariesEnumProcessingStateRequestEnum(String value) {
        this.value = value;
    }
}
