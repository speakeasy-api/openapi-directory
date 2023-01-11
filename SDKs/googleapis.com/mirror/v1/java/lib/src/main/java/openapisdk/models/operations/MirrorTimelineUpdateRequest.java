package openapisdk.models.operations;



public class MirrorTimelineUpdateRequest {
    public MirrorTimelineUpdatePathParams pathParams;
    public MirrorTimelineUpdateRequest withPathParams(MirrorTimelineUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorTimelineUpdateQueryParams queryParams;
    public MirrorTimelineUpdateRequest withQueryParams(MirrorTimelineUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorTimelineUpdateRequests request;
    public MirrorTimelineUpdateRequest withRequest(MirrorTimelineUpdateRequests request) {
        this.request = request;
        return this;
    }
    public MirrorTimelineUpdateSecurity security;
    public MirrorTimelineUpdateRequest withSecurity(MirrorTimelineUpdateSecurity security) {
        this.security = security;
        return this;
    }
}