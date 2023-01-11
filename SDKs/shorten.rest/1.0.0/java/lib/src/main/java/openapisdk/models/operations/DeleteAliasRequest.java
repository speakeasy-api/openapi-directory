package openapisdk.models.operations;



public class DeleteAliasRequest {
    public DeleteAliasQueryParams queryParams;
    public DeleteAliasRequest withQueryParams(DeleteAliasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteAliasSecurity security;
    public DeleteAliasRequest withSecurity(DeleteAliasSecurity security) {
        this.security = security;
        return this;
    }
}