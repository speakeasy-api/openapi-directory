package openapisdk.models.operations;



public class GetContentRatingsResponse {
    public String contentType;
    public GetContentRatingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContentRatingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ContentRating[] contentRatings;
    public GetContentRatingsResponse withContentRatings(openapisdk.models.shared.ContentRating[] contentRatings) {
        this.contentRatings = contentRatings;
        return this;
    }
}