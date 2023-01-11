package openapisdk.models.shared;


public enum IndexStatusInspectionResultIndexingStateEnum {
    INDEXING_STATE_UNSPECIFIED("INDEXING_STATE_UNSPECIFIED"),
    INDEXING_ALLOWED("INDEXING_ALLOWED"),
    BLOCKED_BY_META_TAG("BLOCKED_BY_META_TAG"),
    BLOCKED_BY_HTTP_HEADER("BLOCKED_BY_HTTP_HEADER"),
    BLOCKED_BY_ROBOTS_TXT("BLOCKED_BY_ROBOTS_TXT");

    public final String value;

    private IndexStatusInspectionResultIndexingStateEnum(String value) {
        this.value = value;
    }
}
