package openapisdk.models.operations;



public class MirrorLocationsListRequest {
    public MirrorLocationsListQueryParams queryParams;
    public MirrorLocationsListRequest withQueryParams(MirrorLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorLocationsListSecurity security;
    public MirrorLocationsListRequest withSecurity(MirrorLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}