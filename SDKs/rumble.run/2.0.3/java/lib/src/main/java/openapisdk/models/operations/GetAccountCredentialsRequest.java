package openapisdk.models.operations;



public class GetAccountCredentialsRequest {
    public GetAccountCredentialsQueryParams queryParams;
    public GetAccountCredentialsRequest withQueryParams(GetAccountCredentialsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAccountCredentialsSecurity security;
    public GetAccountCredentialsRequest withSecurity(GetAccountCredentialsSecurity security) {
        this.security = security;
        return this;
    }
}