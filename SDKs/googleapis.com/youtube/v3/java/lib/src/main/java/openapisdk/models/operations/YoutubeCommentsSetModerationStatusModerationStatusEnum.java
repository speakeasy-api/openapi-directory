package openapisdk.models.operations;


public enum YoutubeCommentsSetModerationStatusModerationStatusEnum {
    PUBLISHED("published"),
    HELD_FOR_REVIEW("heldForReview"),
    LIKELY_SPAM("likelySpam"),
    REJECTED("rejected");

    public final String value;

    private YoutubeCommentsSetModerationStatusModerationStatusEnum(String value) {
        this.value = value;
    }
}
