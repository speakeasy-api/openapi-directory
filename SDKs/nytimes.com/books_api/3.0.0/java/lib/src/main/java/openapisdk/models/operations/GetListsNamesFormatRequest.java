package openapisdk.models.operations;



public class GetListsNamesFormatRequest {
    public GetListsNamesFormatPathParams pathParams;
    public GetListsNamesFormatRequest withPathParams(GetListsNamesFormatPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetListsNamesFormatQueryParams queryParams;
    public GetListsNamesFormatRequest withQueryParams(GetListsNamesFormatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListsNamesFormatSecurity security;
    public GetListsNamesFormatRequest withSecurity(GetListsNamesFormatSecurity security) {
        this.security = security;
        return this;
    }
}