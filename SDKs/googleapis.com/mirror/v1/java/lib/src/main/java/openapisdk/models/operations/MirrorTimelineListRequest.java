package openapisdk.models.operations;



public class MirrorTimelineListRequest {
    public MirrorTimelineListQueryParams queryParams;
    public MirrorTimelineListRequest withQueryParams(MirrorTimelineListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorTimelineListSecurity security;
    public MirrorTimelineListRequest withSecurity(MirrorTimelineListSecurity security) {
        this.security = security;
        return this;
    }
}