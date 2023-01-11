package openapisdk.models.operations;



public class BloggerPostUserInfosListResponse {
    public String contentType;
    public BloggerPostUserInfosListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostUserInfosList postUserInfosList;
    public BloggerPostUserInfosListResponse withPostUserInfosList(openapisdk.models.shared.PostUserInfosList postUserInfosList) {
        this.postUserInfosList = postUserInfosList;
        return this;
    }
    public Long statusCode;
    public BloggerPostUserInfosListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}