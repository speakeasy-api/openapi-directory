package openapisdk.models.operations;



public class DeleteTextTrackRequest {
    public DeleteTextTrackPathParams pathParams;
    public DeleteTextTrackRequest withPathParams(DeleteTextTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTextTrackSecurity security;
    public DeleteTextTrackRequest withSecurity(DeleteTextTrackSecurity security) {
        this.security = security;
        return this;
    }
}