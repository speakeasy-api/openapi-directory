package openapisdk.models.operations;



public class AcceptEuaResponse {
    public String contentType;
    public AcceptEuaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EndUserAgreement endUserAgreement;
    public AcceptEuaResponse withEndUserAgreement(openapisdk.models.shared.EndUserAgreement endUserAgreement) {
        this.endUserAgreement = endUserAgreement;
        return this;
    }
    public Long statusCode;
    public AcceptEuaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}