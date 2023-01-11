package openapisdk.models.operations;



public class GetAllAccountsRequest {
    public GetAllAccountsQueryParams queryParams;
    public GetAllAccountsRequest withQueryParams(GetAllAccountsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAllAccountsSecurity security;
    public GetAllAccountsRequest withSecurity(GetAllAccountsSecurity security) {
        this.security = security;
        return this;
    }
}