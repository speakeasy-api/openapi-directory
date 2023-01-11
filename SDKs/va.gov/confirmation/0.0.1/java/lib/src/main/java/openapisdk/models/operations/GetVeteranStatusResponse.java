package openapisdk.models.operations;



public class GetVeteranStatusResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetVeteranStatusResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.AuthorizationError authorizationError;
    public GetVeteranStatusResponse withAuthorizationError(openapisdk.models.shared.AuthorizationError authorizationError) {
        this.authorizationError = authorizationError;
        return this;
    }
    public String contentType;
    public GetVeteranStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVeteranStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VeteranStatusConfirmation veteranStatusConfirmation;
    public GetVeteranStatusResponse withVeteranStatusConfirmation(openapisdk.models.shared.VeteranStatusConfirmation veteranStatusConfirmation) {
        this.veteranStatusConfirmation = veteranStatusConfirmation;
        return this;
    }
}