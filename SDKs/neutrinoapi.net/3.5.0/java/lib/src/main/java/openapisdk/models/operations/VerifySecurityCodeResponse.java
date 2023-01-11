package openapisdk.models.operations;



public class VerifySecurityCodeResponse {
    public openapisdk.models.shared.ApiError apiError;
    public VerifySecurityCodeResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public VerifySecurityCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VerifySecurityCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifySecurityCodeResponse verifySecurityCodeResponse;
    public VerifySecurityCodeResponse withVerifySecurityCodeResponse(openapisdk.models.shared.VerifySecurityCodeResponse verifySecurityCodeResponse) {
        this.verifySecurityCodeResponse = verifySecurityCodeResponse;
        return this;
    }
}