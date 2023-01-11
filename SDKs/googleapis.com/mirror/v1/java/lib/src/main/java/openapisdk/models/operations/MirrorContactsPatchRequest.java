package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorContactsPatchRequest {
    public MirrorContactsPatchPathParams pathParams;
    public MirrorContactsPatchRequest withPathParams(MirrorContactsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorContactsPatchQueryParams queryParams;
    public MirrorContactsPatchRequest withQueryParams(MirrorContactsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Contact request;
    public MirrorContactsPatchRequest withRequest(openapisdk.models.shared.Contact request) {
        this.request = request;
        return this;
    }
    public MirrorContactsPatchSecurity security;
    public MirrorContactsPatchRequest withSecurity(MirrorContactsPatchSecurity security) {
        this.security = security;
        return this;
    }
}