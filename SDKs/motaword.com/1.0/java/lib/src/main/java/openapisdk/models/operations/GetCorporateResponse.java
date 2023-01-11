package openapisdk.models.operations;



public class GetCorporateResponse {
    public String contentType;
    public GetCorporateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CorporateAccount corporateAccount;
    public GetCorporateResponse withCorporateAccount(openapisdk.models.shared.CorporateAccount corporateAccount) {
        this.corporateAccount = corporateAccount;
        return this;
    }
    public Long statusCode;
    public GetCorporateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}