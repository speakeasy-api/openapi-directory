package openapisdk.models.operations;


public enum SearchCseListSafeEnum {
    SAFE_UNDEFINED("safeUndefined"),
    ACTIVE("active"),
    HIGH("high"),
    MEDIUM("medium"),
    OFF("off");

    public final String value;

    private SearchCseListSafeEnum(String value) {
        this.value = value;
    }
}
