package openapisdk.models.operations;



public class AndroidpublisherReviewsListResponse {
    public String contentType;
    public AndroidpublisherReviewsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReviewsListResponse reviewsListResponse;
    public AndroidpublisherReviewsListResponse withReviewsListResponse(openapisdk.models.shared.ReviewsListResponse reviewsListResponse) {
        this.reviewsListResponse = reviewsListResponse;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherReviewsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}