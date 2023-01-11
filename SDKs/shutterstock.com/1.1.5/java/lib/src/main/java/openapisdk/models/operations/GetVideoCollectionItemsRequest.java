package openapisdk.models.operations;



public class GetVideoCollectionItemsRequest {
    public GetVideoCollectionItemsPathParams pathParams;
    public GetVideoCollectionItemsRequest withPathParams(GetVideoCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVideoCollectionItemsQueryParams queryParams;
    public GetVideoCollectionItemsRequest withQueryParams(GetVideoCollectionItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVideoCollectionItemsSecurity security;
    public GetVideoCollectionItemsRequest withSecurity(GetVideoCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}