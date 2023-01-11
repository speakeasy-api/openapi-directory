package openapisdk.models.shared;


public enum SearchErrorResponseStatusEnum {
    IN_PROGRESS("IN PROGRESS"),
    FAILED("FAILED"),
    EXPIRED("EXPIRED"),
    CANCELLED("CANCELLED"),
    ONE_HUNDRED_AND_ONE("101");

    public final String value;

    private SearchErrorResponseStatusEnum(String value) {
        this.value = value;
    }
}
