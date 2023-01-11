package openapisdk.models.shared;


public enum SearchResponseStatusEnum {
    IN_PROGRESS("IN PROGRESS"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED"),
    EXPIRED("EXPIRED"),
    CANCELLED("CANCELLED");

    public final String value;

    private SearchResponseStatusEnum(String value) {
        this.value = value;
    }
}
