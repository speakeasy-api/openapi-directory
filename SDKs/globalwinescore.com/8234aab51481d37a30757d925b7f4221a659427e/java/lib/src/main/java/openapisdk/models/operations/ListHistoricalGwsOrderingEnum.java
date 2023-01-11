package openapisdk.models.operations;


public enum ListHistoricalGwsOrderingEnum {
    DATE("date"),
    MINUS_DATE("-date"),
    SCORE("score"),
    MINUS_SCORE("-score");

    public final String value;

    private ListHistoricalGwsOrderingEnum(String value) {
        this.value = value;
    }
}
