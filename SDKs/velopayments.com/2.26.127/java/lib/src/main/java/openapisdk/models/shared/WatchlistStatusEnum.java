package openapisdk.models.shared;


public enum WatchlistStatusEnum {
    NONE("NONE"),
    PENDING("PENDING"),
    REVIEW("REVIEW"),
    PASSED("PASSED"),
    FAILED("FAILED");

    public final String value;

    private WatchlistStatusEnum(String value) {
        this.value = value;
    }
}
