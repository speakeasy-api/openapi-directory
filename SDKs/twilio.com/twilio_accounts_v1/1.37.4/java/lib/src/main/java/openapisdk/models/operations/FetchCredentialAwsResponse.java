package openapisdk.models.operations;



public class FetchCredentialAwsResponse {
    public String contentType;
    public FetchCredentialAwsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCredentialAwsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountsV1CredentialCredentialAws accountsV1CredentialCredentialAws;
    public FetchCredentialAwsResponse withAccountsV1CredentialCredentialAws(openapisdk.models.shared.AccountsV1CredentialCredentialAws accountsV1CredentialCredentialAws) {
        this.accountsV1CredentialCredentialAws = accountsV1CredentialCredentialAws;
        return this;
    }
}