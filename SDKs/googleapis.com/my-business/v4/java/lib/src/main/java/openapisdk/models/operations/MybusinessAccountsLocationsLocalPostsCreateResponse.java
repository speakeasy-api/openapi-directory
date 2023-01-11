package openapisdk.models.operations;



public class MybusinessAccountsLocationsLocalPostsCreateResponse {
    public String contentType;
    public MybusinessAccountsLocationsLocalPostsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocalPost localPost;
    public MybusinessAccountsLocationsLocalPostsCreateResponse withLocalPost(openapisdk.models.shared.LocalPost localPost) {
        this.localPost = localPost;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsLocalPostsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}