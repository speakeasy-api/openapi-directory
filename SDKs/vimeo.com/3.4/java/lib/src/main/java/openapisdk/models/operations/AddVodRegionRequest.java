package openapisdk.models.operations;



public class AddVodRegionRequest {
    public AddVodRegionPathParams pathParams;
    public AddVodRegionRequest withPathParams(AddVodRegionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVodRegionSecurity security;
    public AddVodRegionRequest withSecurity(AddVodRegionSecurity security) {
        this.security = security;
        return this;
    }
}