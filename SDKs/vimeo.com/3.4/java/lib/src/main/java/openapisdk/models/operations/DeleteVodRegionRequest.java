package openapisdk.models.operations;



public class DeleteVodRegionRequest {
    public DeleteVodRegionPathParams pathParams;
    public DeleteVodRegionRequest withPathParams(DeleteVodRegionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVodRegionSecurity security;
    public DeleteVodRegionRequest withSecurity(DeleteVodRegionSecurity security) {
        this.security = security;
        return this;
    }
}