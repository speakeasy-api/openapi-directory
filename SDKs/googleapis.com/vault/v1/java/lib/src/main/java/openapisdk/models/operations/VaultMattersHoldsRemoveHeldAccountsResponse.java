package openapisdk.models.operations;



public class VaultMattersHoldsRemoveHeldAccountsResponse {
    public String contentType;
    public VaultMattersHoldsRemoveHeldAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemoveHeldAccountsResponse removeHeldAccountsResponse;
    public VaultMattersHoldsRemoveHeldAccountsResponse withRemoveHeldAccountsResponse(openapisdk.models.shared.RemoveHeldAccountsResponse removeHeldAccountsResponse) {
        this.removeHeldAccountsResponse = removeHeldAccountsResponse;
        return this;
    }
    public Long statusCode;
    public VaultMattersHoldsRemoveHeldAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}