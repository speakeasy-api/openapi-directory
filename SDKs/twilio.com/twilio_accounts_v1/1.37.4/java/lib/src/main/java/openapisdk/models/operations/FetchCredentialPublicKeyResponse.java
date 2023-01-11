package openapisdk.models.operations;



public class FetchCredentialPublicKeyResponse {
    public String contentType;
    public FetchCredentialPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCredentialPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey accountsV1CredentialCredentialPublicKey;
    public FetchCredentialPublicKeyResponse withAccountsV1CredentialCredentialPublicKey(openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey accountsV1CredentialCredentialPublicKey) {
        this.accountsV1CredentialCredentialPublicKey = accountsV1CredentialCredentialPublicKey;
        return this;
    }
}