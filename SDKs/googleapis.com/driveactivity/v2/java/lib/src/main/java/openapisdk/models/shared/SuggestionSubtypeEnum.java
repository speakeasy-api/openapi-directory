package openapisdk.models.shared;


public enum SuggestionSubtypeEnum {
    SUBTYPE_UNSPECIFIED("SUBTYPE_UNSPECIFIED"),
    ADDED("ADDED"),
    DELETED("DELETED"),
    REPLY_ADDED("REPLY_ADDED"),
    REPLY_DELETED("REPLY_DELETED"),
    ACCEPTED("ACCEPTED"),
    REJECTED("REJECTED"),
    ACCEPT_DELETED("ACCEPT_DELETED"),
    REJECT_DELETED("REJECT_DELETED");

    public final String value;

    private SuggestionSubtypeEnum(String value) {
        this.value = value;
    }
}
