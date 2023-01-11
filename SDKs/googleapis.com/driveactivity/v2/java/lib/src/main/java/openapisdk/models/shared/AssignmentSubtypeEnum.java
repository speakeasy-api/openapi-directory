package openapisdk.models.shared;


public enum AssignmentSubtypeEnum {
    SUBTYPE_UNSPECIFIED("SUBTYPE_UNSPECIFIED"),
    ADDED("ADDED"),
    DELETED("DELETED"),
    REPLY_ADDED("REPLY_ADDED"),
    REPLY_DELETED("REPLY_DELETED"),
    RESOLVED("RESOLVED"),
    REOPENED("REOPENED"),
    REASSIGNED("REASSIGNED");

    public final String value;

    private AssignmentSubtypeEnum(String value) {
        this.value = value;
    }
}
