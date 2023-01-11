package openapisdk.models.shared;


public enum PostSubtypeEnum {
    SUBTYPE_UNSPECIFIED("SUBTYPE_UNSPECIFIED"),
    ADDED("ADDED"),
    DELETED("DELETED"),
    REPLY_ADDED("REPLY_ADDED"),
    REPLY_DELETED("REPLY_DELETED"),
    RESOLVED("RESOLVED"),
    REOPENED("REOPENED");

    public final String value;

    private PostSubtypeEnum(String value) {
        this.value = value;
    }
}
