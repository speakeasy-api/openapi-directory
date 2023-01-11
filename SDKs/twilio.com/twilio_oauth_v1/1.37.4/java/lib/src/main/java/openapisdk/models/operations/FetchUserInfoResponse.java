package openapisdk.models.operations;



public class FetchUserInfoResponse {
    public String contentType;
    public FetchUserInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OauthV1UserInfo oauthV1UserInfo;
    public FetchUserInfoResponse withOauthV1UserInfo(openapisdk.models.shared.OauthV1UserInfo oauthV1UserInfo) {
        this.oauthV1UserInfo = oauthV1UserInfo;
        return this;
    }
}