package openapisdk.models.operations;



public class AndroidpublisherReviewsGetResponse {
    public String contentType;
    public AndroidpublisherReviewsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Review review;
    public AndroidpublisherReviewsGetResponse withReview(openapisdk.models.shared.Review review) {
        this.review = review;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherReviewsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}