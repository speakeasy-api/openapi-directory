package openapisdk.models.operations;



public class ReposAddStatusCheckContextsResponse {
    public String contentType;
    public ReposAddStatusCheckContextsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposAddStatusCheckContextsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposAddStatusCheckContextsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public String[] reposAddStatusCheckContexts200ApplicationJSONStrings;
    public ReposAddStatusCheckContextsResponse withReposAddStatusCheckContexts200ApplicationJsonStrings(String[] reposAddStatusCheckContexts200ApplicationJSONStrings) {
        this.reposAddStatusCheckContexts200ApplicationJSONStrings = reposAddStatusCheckContexts200ApplicationJSONStrings;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposAddStatusCheckContextsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}