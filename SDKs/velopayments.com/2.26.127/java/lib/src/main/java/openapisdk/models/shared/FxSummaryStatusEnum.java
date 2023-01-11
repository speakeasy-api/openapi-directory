package openapisdk.models.shared;


public enum FxSummaryStatusEnum {
    UNQUOTED("UNQUOTED"),
    QUOTED("QUOTED"),
    EXPIRED("EXPIRED"),
    EXECUTED("EXECUTED");

    public final String value;

    private FxSummaryStatusEnum(String value) {
        this.value = value;
    }
}
