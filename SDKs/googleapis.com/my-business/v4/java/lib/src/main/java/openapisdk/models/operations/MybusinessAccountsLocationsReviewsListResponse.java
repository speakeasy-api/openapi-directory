package openapisdk.models.operations;



public class MybusinessAccountsLocationsReviewsListResponse {
    public String contentType;
    public MybusinessAccountsLocationsReviewsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReviewsResponse listReviewsResponse;
    public MybusinessAccountsLocationsReviewsListResponse withListReviewsResponse(openapisdk.models.shared.ListReviewsResponse listReviewsResponse) {
        this.listReviewsResponse = listReviewsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsReviewsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}