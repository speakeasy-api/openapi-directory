package openapisdk.models.operations;



public class GetAccountsAccountIdPartyResponse {
    public String contentType;
    public GetAccountsAccountIdPartyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdPartyResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadParty2 obReadParty2;
    public GetAccountsAccountIdPartyResponse withObReadParty2(openapisdk.models.shared.ObReadParty2 obReadParty2) {
        this.obReadParty2 = obReadParty2;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdPartyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}