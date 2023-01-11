package openapisdk.models.operations;



public class MirrorTimelineAttachmentsListRequest {
    public MirrorTimelineAttachmentsListPathParams pathParams;
    public MirrorTimelineAttachmentsListRequest withPathParams(MirrorTimelineAttachmentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorTimelineAttachmentsListQueryParams queryParams;
    public MirrorTimelineAttachmentsListRequest withQueryParams(MirrorTimelineAttachmentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorTimelineAttachmentsListSecurity security;
    public MirrorTimelineAttachmentsListRequest withSecurity(MirrorTimelineAttachmentsListSecurity security) {
        this.security = security;
        return this;
    }
}