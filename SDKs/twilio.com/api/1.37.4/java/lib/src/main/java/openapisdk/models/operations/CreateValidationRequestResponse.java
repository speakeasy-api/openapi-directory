package openapisdk.models.operations;



public class CreateValidationRequestResponse {
    public String contentType;
    public CreateValidationRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateValidationRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountValidationRequest apiV2010AccountValidationRequest;
    public CreateValidationRequestResponse withApiV2010AccountValidationRequest(openapisdk.models.shared.ApiV2010AccountValidationRequest apiV2010AccountValidationRequest) {
        this.apiV2010AccountValidationRequest = apiV2010AccountValidationRequest;
        return this;
    }
}