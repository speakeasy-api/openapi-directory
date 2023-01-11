package openapisdk.models.operations;



public class MirrorLocationsGetRequest {
    public MirrorLocationsGetPathParams pathParams;
    public MirrorLocationsGetRequest withPathParams(MirrorLocationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorLocationsGetQueryParams queryParams;
    public MirrorLocationsGetRequest withQueryParams(MirrorLocationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorLocationsGetSecurity security;
    public MirrorLocationsGetRequest withSecurity(MirrorLocationsGetSecurity security) {
        this.security = security;
        return this;
    }
}