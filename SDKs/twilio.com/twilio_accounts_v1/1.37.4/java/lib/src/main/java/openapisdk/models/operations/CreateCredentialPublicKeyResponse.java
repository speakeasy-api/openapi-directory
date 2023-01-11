package openapisdk.models.operations;



public class CreateCredentialPublicKeyResponse {
    public String contentType;
    public CreateCredentialPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCredentialPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey accountsV1CredentialCredentialPublicKey;
    public CreateCredentialPublicKeyResponse withAccountsV1CredentialCredentialPublicKey(openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey accountsV1CredentialCredentialPublicKey) {
        this.accountsV1CredentialCredentialPublicKey = accountsV1CredentialCredentialPublicKey;
        return this;
    }
}