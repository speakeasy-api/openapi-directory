package openapisdk.models.operations;



public class GetImageCollectionItemsRequest {
    public GetImageCollectionItemsPathParams pathParams;
    public GetImageCollectionItemsRequest withPathParams(GetImageCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetImageCollectionItemsQueryParams queryParams;
    public GetImageCollectionItemsRequest withQueryParams(GetImageCollectionItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImageCollectionItemsSecurity security;
    public GetImageCollectionItemsRequest withSecurity(GetImageCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}