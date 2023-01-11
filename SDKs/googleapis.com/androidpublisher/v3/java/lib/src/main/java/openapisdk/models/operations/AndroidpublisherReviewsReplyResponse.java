package openapisdk.models.operations;



public class AndroidpublisherReviewsReplyResponse {
    public String contentType;
    public AndroidpublisherReviewsReplyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReviewsReplyResponse reviewsReplyResponse;
    public AndroidpublisherReviewsReplyResponse withReviewsReplyResponse(openapisdk.models.shared.ReviewsReplyResponse reviewsReplyResponse) {
        this.reviewsReplyResponse = reviewsReplyResponse;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherReviewsReplyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}