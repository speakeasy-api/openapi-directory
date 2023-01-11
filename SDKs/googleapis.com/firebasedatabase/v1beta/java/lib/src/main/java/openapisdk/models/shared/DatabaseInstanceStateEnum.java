package openapisdk.models.shared;


public enum DatabaseInstanceStateEnum {
    LIFECYCLE_STATE_UNSPECIFIED("LIFECYCLE_STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DISABLED("DISABLED"),
    DELETED("DELETED");

    public final String value;

    private DatabaseInstanceStateEnum(String value) {
        this.value = value;
    }
}
