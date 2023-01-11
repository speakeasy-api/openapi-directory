package openapisdk.models.operations;



public class CreateEuaResponse {
    public String contentType;
    public CreateEuaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EndUserAgreement endUserAgreement;
    public CreateEuaResponse withEndUserAgreement(openapisdk.models.shared.EndUserAgreement endUserAgreement) {
        this.endUserAgreement = endUserAgreement;
        return this;
    }
    public Long statusCode;
    public CreateEuaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}