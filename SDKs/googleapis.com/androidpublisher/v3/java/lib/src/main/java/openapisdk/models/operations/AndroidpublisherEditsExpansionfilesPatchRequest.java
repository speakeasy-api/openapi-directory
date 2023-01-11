package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsExpansionfilesPatchRequest {
    public AndroidpublisherEditsExpansionfilesPatchPathParams pathParams;
    public AndroidpublisherEditsExpansionfilesPatchRequest withPathParams(AndroidpublisherEditsExpansionfilesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsExpansionfilesPatchQueryParams queryParams;
    public AndroidpublisherEditsExpansionfilesPatchRequest withQueryParams(AndroidpublisherEditsExpansionfilesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExpansionFile request;
    public AndroidpublisherEditsExpansionfilesPatchRequest withRequest(openapisdk.models.shared.ExpansionFile request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsExpansionfilesPatchSecurity security;
    public AndroidpublisherEditsExpansionfilesPatchRequest withSecurity(AndroidpublisherEditsExpansionfilesPatchSecurity security) {
        this.security = security;
        return this;
    }
}