package openapisdk.models.operations;


public enum TimeframesTypeEnum {
    CURRENT("current"),
    UPCOMING("upcoming"),
    COMPLETED("completed"),
    RECENT("recent"),
    ALL("all");

    public final String value;

    private TimeframesTypeEnum(String value) {
        this.value = value;
    }
}
