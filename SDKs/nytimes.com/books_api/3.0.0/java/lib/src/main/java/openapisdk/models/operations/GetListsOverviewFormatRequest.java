package openapisdk.models.operations;



public class GetListsOverviewFormatRequest {
    public GetListsOverviewFormatPathParams pathParams;
    public GetListsOverviewFormatRequest withPathParams(GetListsOverviewFormatPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetListsOverviewFormatQueryParams queryParams;
    public GetListsOverviewFormatRequest withQueryParams(GetListsOverviewFormatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListsOverviewFormatSecurity security;
    public GetListsOverviewFormatRequest withSecurity(GetListsOverviewFormatSecurity security) {
        this.security = security;
        return this;
    }
}