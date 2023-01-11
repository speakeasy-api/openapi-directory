package openapisdk.models.shared;


public enum WatchlistStatus2Enum {
    NONE("NONE"),
    PENDING("PENDING"),
    REVIEW("REVIEW"),
    PASSED("PASSED"),
    FAILED("FAILED");

    public final String value;

    private WatchlistStatus2Enum(String value) {
        this.value = value;
    }
}
