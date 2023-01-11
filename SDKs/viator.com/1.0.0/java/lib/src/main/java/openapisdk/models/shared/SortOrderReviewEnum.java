package openapisdk.models.shared;


public enum SortOrderReviewEnum {
    REVIEW_RATING_A("REVIEW_RATING_A"),
    REVIEW_RATING_D("REVIEW_RATING_D"),
    REVIEW_RATING_SUBMISSION_DATE_D("REVIEW_RATING_SUBMISSION_DATE_D");

    public final String value;

    private SortOrderReviewEnum(String value) {
        this.value = value;
    }
}
