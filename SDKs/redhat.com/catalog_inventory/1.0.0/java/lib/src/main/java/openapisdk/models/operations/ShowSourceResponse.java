package openapisdk.models.operations;



public class ShowSourceResponse {
    public String contentType;
    public ShowSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ShowSourceResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.Source source;
    public ShowSourceResponse withSource(openapisdk.models.shared.Source source) {
        this.source = source;
        return this;
    }
    public Long statusCode;
    public ShowSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}