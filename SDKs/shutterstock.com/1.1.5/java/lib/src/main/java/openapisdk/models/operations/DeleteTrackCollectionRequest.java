package openapisdk.models.operations;



public class DeleteTrackCollectionRequest {
    public DeleteTrackCollectionPathParams pathParams;
    public DeleteTrackCollectionRequest withPathParams(DeleteTrackCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTrackCollectionSecurity security;
    public DeleteTrackCollectionRequest withSecurity(DeleteTrackCollectionSecurity security) {
        this.security = security;
        return this;
    }
}