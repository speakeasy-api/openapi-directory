package openapisdk.models.operations;



public class MirrorTimelineAttachmentsInsertRequest {
    public MirrorTimelineAttachmentsInsertPathParams pathParams;
    public MirrorTimelineAttachmentsInsertRequest withPathParams(MirrorTimelineAttachmentsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorTimelineAttachmentsInsertQueryParams queryParams;
    public MirrorTimelineAttachmentsInsertRequest withQueryParams(MirrorTimelineAttachmentsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorTimelineAttachmentsInsertSecurity security;
    public MirrorTimelineAttachmentsInsertRequest withSecurity(MirrorTimelineAttachmentsInsertSecurity security) {
        this.security = security;
        return this;
    }
}