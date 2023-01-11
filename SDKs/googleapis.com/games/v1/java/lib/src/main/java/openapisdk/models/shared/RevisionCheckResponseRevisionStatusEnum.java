package openapisdk.models.shared;


public enum RevisionCheckResponseRevisionStatusEnum {
    REVISION_STATUS_UNSPECIFIED("REVISION_STATUS_UNSPECIFIED"),
    OK("OK"),
    DEPRECATED("DEPRECATED"),
    INVALID("INVALID");

    public final String value;

    private RevisionCheckResponseRevisionStatusEnum(String value) {
        this.value = value;
    }
}
