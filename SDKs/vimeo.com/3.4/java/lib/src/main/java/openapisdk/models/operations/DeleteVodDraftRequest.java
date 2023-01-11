package openapisdk.models.operations;



public class DeleteVodDraftRequest {
    public DeleteVodDraftPathParams pathParams;
    public DeleteVodDraftRequest withPathParams(DeleteVodDraftPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVodDraftSecurity security;
    public DeleteVodDraftRequest withSecurity(DeleteVodDraftSecurity security) {
        this.security = security;
        return this;
    }
}