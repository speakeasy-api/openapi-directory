package openapisdk.models.shared;


public enum FloodlightActivityCountingMethodEnum {
    STANDARD_COUNTING("STANDARD_COUNTING"),
    UNIQUE_COUNTING("UNIQUE_COUNTING"),
    SESSION_COUNTING("SESSION_COUNTING"),
    TRANSACTIONS_COUNTING("TRANSACTIONS_COUNTING"),
    ITEMS_SOLD_COUNTING("ITEMS_SOLD_COUNTING");

    public final String value;

    private FloodlightActivityCountingMethodEnum(String value) {
        this.value = value;
    }
}
