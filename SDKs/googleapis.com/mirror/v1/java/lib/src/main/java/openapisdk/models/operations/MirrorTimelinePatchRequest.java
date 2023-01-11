package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelinePatchRequest {
    public MirrorTimelinePatchPathParams pathParams;
    public MirrorTimelinePatchRequest withPathParams(MirrorTimelinePatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorTimelinePatchQueryParams queryParams;
    public MirrorTimelinePatchRequest withQueryParams(MirrorTimelinePatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TimelineItem request;
    public MirrorTimelinePatchRequest withRequest(openapisdk.models.shared.TimelineItem request) {
        this.request = request;
        return this;
    }
    public MirrorTimelinePatchSecurity security;
    public MirrorTimelinePatchRequest withSecurity(MirrorTimelinePatchSecurity security) {
        this.security = security;
        return this;
    }
}