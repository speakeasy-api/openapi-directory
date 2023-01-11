package openapisdk.models.operations;


public enum YoutubeCommentThreadsListModerationStatusEnum {
    PUBLISHED("published"),
    HELD_FOR_REVIEW("heldForReview"),
    LIKELY_SPAM("likelySpam"),
    REJECTED("rejected");

    public final String value;

    private YoutubeCommentThreadsListModerationStatusEnum(String value) {
        this.value = value;
    }
}
