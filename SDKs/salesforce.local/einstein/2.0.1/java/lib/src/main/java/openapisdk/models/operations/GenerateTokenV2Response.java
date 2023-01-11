package openapisdk.models.operations;



public class GenerateTokenV2Response {
    public String contentType;
    public GenerateTokenV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateAccessTokenResponse generateAccessTokenResponse;
    public GenerateTokenV2Response withGenerateAccessTokenResponse(openapisdk.models.shared.GenerateAccessTokenResponse generateAccessTokenResponse) {
        this.generateAccessTokenResponse = generateAccessTokenResponse;
        return this;
    }
    public Long statusCode;
    public GenerateTokenV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}