package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsDetailsUpdateRequest {
    public AndroidpublisherEditsDetailsUpdatePathParams pathParams;
    public AndroidpublisherEditsDetailsUpdateRequest withPathParams(AndroidpublisherEditsDetailsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsDetailsUpdateQueryParams queryParams;
    public AndroidpublisherEditsDetailsUpdateRequest withQueryParams(AndroidpublisherEditsDetailsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppDetails request;
    public AndroidpublisherEditsDetailsUpdateRequest withRequest(openapisdk.models.shared.AppDetails request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsDetailsUpdateSecurity security;
    public AndroidpublisherEditsDetailsUpdateRequest withSecurity(AndroidpublisherEditsDetailsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}