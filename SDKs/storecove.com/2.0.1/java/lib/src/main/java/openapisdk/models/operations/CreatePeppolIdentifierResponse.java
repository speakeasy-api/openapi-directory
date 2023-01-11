package openapisdk.models.operations;



public class CreatePeppolIdentifierResponse {
    public String contentType;
    public CreatePeppolIdentifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] errorModels;
    public CreatePeppolIdentifierResponse withErrorModels(Object[] errorModels) {
        this.errorModels = errorModels;
        return this;
    }
    public Object peppolIdentifier;
    public CreatePeppolIdentifierResponse withPeppolIdentifier(Object peppolIdentifier) {
        this.peppolIdentifier = peppolIdentifier;
        return this;
    }
    public Long statusCode;
    public CreatePeppolIdentifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}