package openapisdk.models.operations;



public class GetListsFormatRequest {
    public GetListsFormatPathParams pathParams;
    public GetListsFormatRequest withPathParams(GetListsFormatPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetListsFormatQueryParams queryParams;
    public GetListsFormatRequest withQueryParams(GetListsFormatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListsFormatSecurity security;
    public GetListsFormatRequest withSecurity(GetListsFormatSecurity security) {
        this.security = security;
        return this;
    }
}