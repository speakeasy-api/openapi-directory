package openapisdk.models.shared;


public enum PublisherReviewStatusStatusEnum {
    REVIEW_STATUS_UNSPECIFIED("REVIEW_STATUS_UNSPECIFIED"),
    REVIEW_STATUS_APPROVED("REVIEW_STATUS_APPROVED"),
    REVIEW_STATUS_REJECTED("REVIEW_STATUS_REJECTED"),
    REVIEW_STATUS_PENDING("REVIEW_STATUS_PENDING");

    public final String value;

    private PublisherReviewStatusStatusEnum(String value) {
        this.value = value;
    }
}
