package openapisdk.models.operations;



public class GistsListForUserResponse {
    public String contentType;
    public GistsListForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GistsListForUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GistsListForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BaseGist[] baseGists;
    public GistsListForUserResponse withBaseGists(openapisdk.models.shared.BaseGist[] baseGists) {
        this.baseGists = baseGists;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GistsListForUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}