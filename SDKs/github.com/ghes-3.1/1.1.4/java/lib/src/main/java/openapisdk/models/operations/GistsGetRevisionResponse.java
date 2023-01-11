package openapisdk.models.operations;



public class GistsGetRevisionResponse {
    public String contentType;
    public GistsGetRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GistsGetRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsGetRevisionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GistSimple gistSimple;
    public GistsGetRevisionResponse withGistSimple(openapisdk.models.shared.GistSimple gistSimple) {
        this.gistSimple = gistSimple;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GistsGetRevisionResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}