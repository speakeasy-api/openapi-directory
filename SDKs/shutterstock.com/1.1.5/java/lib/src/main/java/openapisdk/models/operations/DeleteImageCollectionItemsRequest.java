package openapisdk.models.operations;



public class DeleteImageCollectionItemsRequest {
    public DeleteImageCollectionItemsPathParams pathParams;
    public DeleteImageCollectionItemsRequest withPathParams(DeleteImageCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteImageCollectionItemsQueryParams queryParams;
    public DeleteImageCollectionItemsRequest withQueryParams(DeleteImageCollectionItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteImageCollectionItemsSecurity security;
    public DeleteImageCollectionItemsRequest withSecurity(DeleteImageCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}