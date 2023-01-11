package openapisdk.models.operations;



public class GetAccessTokenResponse {
    public openapisdk.models.shared.AccessTokenDetails accessTokenDetails;
    public GetAccessTokenResponse withAccessTokenDetails(openapisdk.models.shared.AccessTokenDetails accessTokenDetails) {
        this.accessTokenDetails = accessTokenDetails;
        return this;
    }
    public String contentType;
    public GetAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}