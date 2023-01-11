package openapisdk.models.operations;



public class UpdateCredentialPublicKeyResponse {
    public String contentType;
    public UpdateCredentialPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCredentialPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey accountsV1CredentialCredentialPublicKey;
    public UpdateCredentialPublicKeyResponse withAccountsV1CredentialCredentialPublicKey(openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey accountsV1CredentialCredentialPublicKey) {
        this.accountsV1CredentialCredentialPublicKey = accountsV1CredentialCredentialPublicKey;
        return this;
    }
}