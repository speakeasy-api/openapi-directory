package openapisdk.models.operations;



public class GetCorporateByIdResponse {
    public String contentType;
    public GetCorporateByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CorporateAccount corporateAccount;
    public GetCorporateByIdResponse withCorporateAccount(openapisdk.models.shared.CorporateAccount corporateAccount) {
        this.corporateAccount = corporateAccount;
        return this;
    }
    public Long statusCode;
    public GetCorporateByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}