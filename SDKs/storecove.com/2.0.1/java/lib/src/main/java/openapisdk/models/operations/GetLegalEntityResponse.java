package openapisdk.models.operations;



public class GetLegalEntityResponse {
    public String contentType;
    public GetLegalEntityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LegalEntity legalEntity;
    public GetLegalEntityResponse withLegalEntity(openapisdk.models.shared.LegalEntity legalEntity) {
        this.legalEntity = legalEntity;
        return this;
    }
    public Long statusCode;
    public GetLegalEntityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}