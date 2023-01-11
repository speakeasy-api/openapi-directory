package openapisdk.models.operations;



public class RetrieveEuaByIdResponse {
    public String contentType;
    public RetrieveEuaByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EndUserAgreement endUserAgreement;
    public RetrieveEuaByIdResponse withEndUserAgreement(openapisdk.models.shared.EndUserAgreement endUserAgreement) {
        this.endUserAgreement = endUserAgreement;
        return this;
    }
    public Long statusCode;
    public RetrieveEuaByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}