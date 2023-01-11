package openapisdk.models.operations;



public class MirrorTimelineGetRequest {
    public MirrorTimelineGetPathParams pathParams;
    public MirrorTimelineGetRequest withPathParams(MirrorTimelineGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorTimelineGetQueryParams queryParams;
    public MirrorTimelineGetRequest withQueryParams(MirrorTimelineGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorTimelineGetSecurity security;
    public MirrorTimelineGetRequest withSecurity(MirrorTimelineGetSecurity security) {
        this.security = security;
        return this;
    }
}