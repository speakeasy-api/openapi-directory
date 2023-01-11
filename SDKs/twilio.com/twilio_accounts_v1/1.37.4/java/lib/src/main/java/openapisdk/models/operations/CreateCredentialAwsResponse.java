package openapisdk.models.operations;



public class CreateCredentialAwsResponse {
    public String contentType;
    public CreateCredentialAwsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCredentialAwsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountsV1CredentialCredentialAws accountsV1CredentialCredentialAws;
    public CreateCredentialAwsResponse withAccountsV1CredentialCredentialAws(openapisdk.models.shared.AccountsV1CredentialCredentialAws accountsV1CredentialCredentialAws) {
        this.accountsV1CredentialCredentialAws = accountsV1CredentialCredentialAws;
        return this;
    }
}