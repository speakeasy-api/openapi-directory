package openapisdk.models.shared;


public enum AmpInspectionResultIndexingStateEnum {
    AMP_INDEXING_STATE_UNSPECIFIED("AMP_INDEXING_STATE_UNSPECIFIED"),
    AMP_INDEXING_ALLOWED("AMP_INDEXING_ALLOWED"),
    BLOCKED_DUE_TO_NOINDEX("BLOCKED_DUE_TO_NOINDEX"),
    BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER("BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER");

    public final String value;

    private AmpInspectionResultIndexingStateEnum(String value) {
        this.value = value;
    }
}
