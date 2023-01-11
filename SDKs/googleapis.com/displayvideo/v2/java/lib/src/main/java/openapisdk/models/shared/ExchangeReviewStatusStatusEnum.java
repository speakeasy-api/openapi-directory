package openapisdk.models.shared;


public enum ExchangeReviewStatusStatusEnum {
    REVIEW_STATUS_UNSPECIFIED("REVIEW_STATUS_UNSPECIFIED"),
    REVIEW_STATUS_APPROVED("REVIEW_STATUS_APPROVED"),
    REVIEW_STATUS_REJECTED("REVIEW_STATUS_REJECTED"),
    REVIEW_STATUS_PENDING("REVIEW_STATUS_PENDING");

    public final String value;

    private ExchangeReviewStatusStatusEnum(String value) {
        this.value = value;
    }
}
