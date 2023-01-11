package openapisdk.models.operations;



public class MybusinessAccountsLocationsLocalPostsListResponse {
    public String contentType;
    public MybusinessAccountsLocationsLocalPostsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLocalPostsResponse listLocalPostsResponse;
    public MybusinessAccountsLocationsLocalPostsListResponse withListLocalPostsResponse(openapisdk.models.shared.ListLocalPostsResponse listLocalPostsResponse) {
        this.listLocalPostsResponse = listLocalPostsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsLocalPostsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}