package openapisdk.models.operations;



public class MirrorTimelineInsertRequest {
    public MirrorTimelineInsertQueryParams queryParams;
    public MirrorTimelineInsertRequest withQueryParams(MirrorTimelineInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorTimelineInsertRequests request;
    public MirrorTimelineInsertRequest withRequest(MirrorTimelineInsertRequests request) {
        this.request = request;
        return this;
    }
    public MirrorTimelineInsertSecurity security;
    public MirrorTimelineInsertRequest withSecurity(MirrorTimelineInsertSecurity security) {
        this.security = security;
        return this;
    }
}