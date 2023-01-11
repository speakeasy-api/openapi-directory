package openapisdk.models.operations;



public class GetAccountsAccountIdPartiesResponse {
    public String contentType;
    public GetAccountsAccountIdPartiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdPartiesResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadParty3 obReadParty3;
    public GetAccountsAccountIdPartiesResponse withObReadParty3(openapisdk.models.shared.ObReadParty3 obReadParty3) {
        this.obReadParty3 = obReadParty3;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdPartiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}