package openapisdk.models.operations;



public class BloggerPostUserInfosGetResponse {
    public String contentType;
    public BloggerPostUserInfosGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostUserInfo postUserInfo;
    public BloggerPostUserInfosGetResponse withPostUserInfo(openapisdk.models.shared.PostUserInfo postUserInfo) {
        this.postUserInfo = postUserInfo;
        return this;
    }
    public Long statusCode;
    public BloggerPostUserInfosGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}