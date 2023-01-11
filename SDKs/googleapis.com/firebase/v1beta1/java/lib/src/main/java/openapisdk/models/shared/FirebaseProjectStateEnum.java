package openapisdk.models.shared;


public enum FirebaseProjectStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DELETED("DELETED");

    public final String value;

    private FirebaseProjectStateEnum(String value) {
        this.value = value;
    }
}
