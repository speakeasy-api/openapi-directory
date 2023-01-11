package openapisdk.models.operations;



public class VaultMattersHoldsAddHeldAccountsResponse {
    public openapisdk.models.shared.AddHeldAccountsResponse addHeldAccountsResponse;
    public VaultMattersHoldsAddHeldAccountsResponse withAddHeldAccountsResponse(openapisdk.models.shared.AddHeldAccountsResponse addHeldAccountsResponse) {
        this.addHeldAccountsResponse = addHeldAccountsResponse;
        return this;
    }
    public String contentType;
    public VaultMattersHoldsAddHeldAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VaultMattersHoldsAddHeldAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}