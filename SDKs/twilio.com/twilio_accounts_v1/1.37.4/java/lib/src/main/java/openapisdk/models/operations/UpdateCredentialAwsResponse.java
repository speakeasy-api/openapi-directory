package openapisdk.models.operations;



public class UpdateCredentialAwsResponse {
    public String contentType;
    public UpdateCredentialAwsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCredentialAwsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountsV1CredentialCredentialAws accountsV1CredentialCredentialAws;
    public UpdateCredentialAwsResponse withAccountsV1CredentialCredentialAws(openapisdk.models.shared.AccountsV1CredentialCredentialAws accountsV1CredentialCredentialAws) {
        this.accountsV1CredentialCredentialAws = accountsV1CredentialCredentialAws;
        return this;
    }
}