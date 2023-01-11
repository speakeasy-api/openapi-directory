package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyGetRecaptchaParamResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyGetRecaptchaParamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRecaptchaParamResponse getRecaptchaParamResponse;
    public IdentitytoolkitRelyingpartyGetRecaptchaParamResponse withGetRecaptchaParamResponse(openapisdk.models.shared.GetRecaptchaParamResponse getRecaptchaParamResponse) {
        this.getRecaptchaParamResponse = getRecaptchaParamResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyGetRecaptchaParamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}