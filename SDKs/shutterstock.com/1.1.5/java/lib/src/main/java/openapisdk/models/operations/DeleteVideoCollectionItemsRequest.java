package openapisdk.models.operations;



public class DeleteVideoCollectionItemsRequest {
    public DeleteVideoCollectionItemsPathParams pathParams;
    public DeleteVideoCollectionItemsRequest withPathParams(DeleteVideoCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVideoCollectionItemsQueryParams queryParams;
    public DeleteVideoCollectionItemsRequest withQueryParams(DeleteVideoCollectionItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteVideoCollectionItemsSecurity security;
    public DeleteVideoCollectionItemsRequest withSecurity(DeleteVideoCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}