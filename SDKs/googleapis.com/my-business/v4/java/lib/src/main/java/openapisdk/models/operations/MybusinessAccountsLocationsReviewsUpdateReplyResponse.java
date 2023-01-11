package openapisdk.models.operations;



public class MybusinessAccountsLocationsReviewsUpdateReplyResponse {
    public String contentType;
    public MybusinessAccountsLocationsReviewsUpdateReplyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReviewReply reviewReply;
    public MybusinessAccountsLocationsReviewsUpdateReplyResponse withReviewReply(openapisdk.models.shared.ReviewReply reviewReply) {
        this.reviewReply = reviewReply;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsReviewsUpdateReplyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}