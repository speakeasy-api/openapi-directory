package openapisdk.models.operations;



public class VaultMattersHoldsAccountsCreateResponse {
    public String contentType;
    public VaultMattersHoldsAccountsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HeldAccount heldAccount;
    public VaultMattersHoldsAccountsCreateResponse withHeldAccount(openapisdk.models.shared.HeldAccount heldAccount) {
        this.heldAccount = heldAccount;
        return this;
    }
    public Long statusCode;
    public VaultMattersHoldsAccountsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}