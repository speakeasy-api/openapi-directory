package openapisdk.models.operations;



public class VaultMattersHoldsAccountsListResponse {
    public String contentType;
    public VaultMattersHoldsAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListHeldAccountsResponse listHeldAccountsResponse;
    public VaultMattersHoldsAccountsListResponse withListHeldAccountsResponse(openapisdk.models.shared.ListHeldAccountsResponse listHeldAccountsResponse) {
        this.listHeldAccountsResponse = listHeldAccountsResponse;
        return this;
    }
    public Long statusCode;
    public VaultMattersHoldsAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}