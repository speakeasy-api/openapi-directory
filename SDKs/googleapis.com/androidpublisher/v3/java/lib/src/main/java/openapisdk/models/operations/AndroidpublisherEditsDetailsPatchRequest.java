package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsDetailsPatchRequest {
    public AndroidpublisherEditsDetailsPatchPathParams pathParams;
    public AndroidpublisherEditsDetailsPatchRequest withPathParams(AndroidpublisherEditsDetailsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsDetailsPatchQueryParams queryParams;
    public AndroidpublisherEditsDetailsPatchRequest withQueryParams(AndroidpublisherEditsDetailsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppDetails request;
    public AndroidpublisherEditsDetailsPatchRequest withRequest(openapisdk.models.shared.AppDetails request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsDetailsPatchSecurity security;
    public AndroidpublisherEditsDetailsPatchRequest withSecurity(AndroidpublisherEditsDetailsPatchSecurity security) {
        this.security = security;
        return this;
    }
}