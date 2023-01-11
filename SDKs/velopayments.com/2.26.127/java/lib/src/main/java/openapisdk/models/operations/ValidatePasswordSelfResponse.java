package openapisdk.models.operations;



public class ValidatePasswordSelfResponse {
    public String contentType;
    public ValidatePasswordSelfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ValidatePasswordSelfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidatePasswordResponse validatePasswordResponse;
    public ValidatePasswordSelfResponse withValidatePasswordResponse(openapisdk.models.shared.ValidatePasswordResponse validatePasswordResponse) {
        this.validatePasswordResponse = validatePasswordResponse;
        return this;
    }
    public Object inlineResponse400;
    public ValidatePasswordSelfResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public ValidatePasswordSelfResponse withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public ValidatePasswordSelfResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}