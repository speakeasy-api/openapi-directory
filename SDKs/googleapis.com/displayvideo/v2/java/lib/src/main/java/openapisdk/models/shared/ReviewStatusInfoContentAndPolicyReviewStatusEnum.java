package openapisdk.models.shared;


public enum ReviewStatusInfoContentAndPolicyReviewStatusEnum {
    REVIEW_STATUS_UNSPECIFIED("REVIEW_STATUS_UNSPECIFIED"),
    REVIEW_STATUS_APPROVED("REVIEW_STATUS_APPROVED"),
    REVIEW_STATUS_REJECTED("REVIEW_STATUS_REJECTED"),
    REVIEW_STATUS_PENDING("REVIEW_STATUS_PENDING");

    public final String value;

    private ReviewStatusInfoContentAndPolicyReviewStatusEnum(String value) {
        this.value = value;
    }
}
