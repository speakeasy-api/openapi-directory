package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorContactsUpdateRequest {
    public MirrorContactsUpdatePathParams pathParams;
    public MirrorContactsUpdateRequest withPathParams(MirrorContactsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorContactsUpdateQueryParams queryParams;
    public MirrorContactsUpdateRequest withQueryParams(MirrorContactsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Contact request;
    public MirrorContactsUpdateRequest withRequest(openapisdk.models.shared.Contact request) {
        this.request = request;
        return this;
    }
    public MirrorContactsUpdateSecurity security;
    public MirrorContactsUpdateRequest withSecurity(MirrorContactsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}