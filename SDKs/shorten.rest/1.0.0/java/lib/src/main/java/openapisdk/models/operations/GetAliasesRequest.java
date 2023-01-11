package openapisdk.models.operations;



public class GetAliasesRequest {
    public GetAliasesQueryParams queryParams;
    public GetAliasesRequest withQueryParams(GetAliasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAliasesSecurity security;
    public GetAliasesRequest withSecurity(GetAliasesSecurity security) {
        this.security = security;
        return this;
    }
}