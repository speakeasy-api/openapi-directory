package openapisdk.models.operations;



public class CreateLegalEntityResponse {
    public String contentType;
    public CreateLegalEntityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] errorModels;
    public CreateLegalEntityResponse withErrorModels(Object[] errorModels) {
        this.errorModels = errorModels;
        return this;
    }
    public openapisdk.models.shared.LegalEntity legalEntity;
    public CreateLegalEntityResponse withLegalEntity(openapisdk.models.shared.LegalEntity legalEntity) {
        this.legalEntity = legalEntity;
        return this;
    }
    public Long statusCode;
    public CreateLegalEntityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}