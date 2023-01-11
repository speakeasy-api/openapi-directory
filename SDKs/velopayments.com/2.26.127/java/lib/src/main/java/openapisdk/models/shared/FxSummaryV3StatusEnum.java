package openapisdk.models.shared;


public enum FxSummaryV3StatusEnum {
    UNQUOTED("UNQUOTED"),
    QUOTED("QUOTED"),
    EXPIRED("EXPIRED"),
    EXECUTED("EXECUTED");

    public final String value;

    private FxSummaryV3StatusEnum(String value) {
        this.value = value;
    }
}
