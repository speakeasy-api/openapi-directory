package openapisdk.models.operations;



public class UpdateLegalEntityResponse {
    public String contentType;
    public UpdateLegalEntityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] errorModels;
    public UpdateLegalEntityResponse withErrorModels(Object[] errorModels) {
        this.errorModels = errorModels;
        return this;
    }
    public openapisdk.models.shared.LegalEntity legalEntity;
    public UpdateLegalEntityResponse withLegalEntity(openapisdk.models.shared.LegalEntity legalEntity) {
        this.legalEntity = legalEntity;
        return this;
    }
    public Long statusCode;
    public UpdateLegalEntityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}