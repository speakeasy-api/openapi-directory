package openapisdk.models.operations;



public class GetAliasRequest {
    public GetAliasQueryParams queryParams;
    public GetAliasRequest withQueryParams(GetAliasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAliasSecurity security;
    public GetAliasRequest withSecurity(GetAliasSecurity security) {
        this.security = security;
        return this;
    }
}