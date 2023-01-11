package openapisdk.models.shared;


public enum CommentSnippetModerationStatusEnum {
    PUBLISHED("published"),
    HELD_FOR_REVIEW("heldForReview"),
    LIKELY_SPAM("likelySpam"),
    REJECTED("rejected");

    public final String value;

    private CommentSnippetModerationStatusEnum(String value) {
        this.value = value;
    }
}
