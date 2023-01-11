package openapisdk.models.operations;


public enum GetRecordsStatusEnum {
    DELIVERED("delivered"),
    EXPIRED("expired"),
    FAILED("failed"),
    REJECTED("rejected"),
    ACCEPTED("accepted"),
    BUFFERED("buffered"),
    UNKNOWN("unknown"),
    DELETED("deleted");

    public final String value;

    private GetRecordsStatusEnum(String value) {
        this.value = value;
    }
}
