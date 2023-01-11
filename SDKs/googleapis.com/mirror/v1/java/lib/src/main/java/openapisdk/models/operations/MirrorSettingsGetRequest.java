package openapisdk.models.operations;



public class MirrorSettingsGetRequest {
    public MirrorSettingsGetPathParams pathParams;
    public MirrorSettingsGetRequest withPathParams(MirrorSettingsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorSettingsGetQueryParams queryParams;
    public MirrorSettingsGetRequest withQueryParams(MirrorSettingsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorSettingsGetSecurity security;
    public MirrorSettingsGetRequest withSecurity(MirrorSettingsGetSecurity security) {
        this.security = security;
        return this;
    }
}