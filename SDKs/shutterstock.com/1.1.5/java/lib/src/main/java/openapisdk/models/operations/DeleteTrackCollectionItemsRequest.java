package openapisdk.models.operations;



public class DeleteTrackCollectionItemsRequest {
    public DeleteTrackCollectionItemsPathParams pathParams;
    public DeleteTrackCollectionItemsRequest withPathParams(DeleteTrackCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTrackCollectionItemsQueryParams queryParams;
    public DeleteTrackCollectionItemsRequest withQueryParams(DeleteTrackCollectionItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteTrackCollectionItemsSecurity security;
    public DeleteTrackCollectionItemsRequest withSecurity(DeleteTrackCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}