package openapisdk.models.shared;


public enum IssueResolutionEnum {
    RESOLUTION_UNSPECIFIED("RESOLUTION_UNSPECIFIED"),
    USER_ACTION("USER_ACTION"),
    PENDING_PROCESSING("PENDING_PROCESSING");

    public final String value;

    private IssueResolutionEnum(String value) {
        this.value = value;
    }
}
