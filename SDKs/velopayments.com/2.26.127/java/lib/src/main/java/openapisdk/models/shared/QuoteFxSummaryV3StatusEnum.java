package openapisdk.models.shared;


public enum QuoteFxSummaryV3StatusEnum {
    UNQUOTED("UNQUOTED"),
    QUOTED("QUOTED"),
    EXPIRED("EXPIRED"),
    EXECUTED("EXECUTED"),
    REJECTED("REJECTED");

    public final String value;

    private QuoteFxSummaryV3StatusEnum(String value) {
        this.value = value;
    }
}
