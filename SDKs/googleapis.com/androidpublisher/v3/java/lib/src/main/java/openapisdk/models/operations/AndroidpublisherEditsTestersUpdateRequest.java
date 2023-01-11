package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsTestersUpdateRequest {
    public AndroidpublisherEditsTestersUpdatePathParams pathParams;
    public AndroidpublisherEditsTestersUpdateRequest withPathParams(AndroidpublisherEditsTestersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsTestersUpdateQueryParams queryParams;
    public AndroidpublisherEditsTestersUpdateRequest withQueryParams(AndroidpublisherEditsTestersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Testers request;
    public AndroidpublisherEditsTestersUpdateRequest withRequest(openapisdk.models.shared.Testers request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsTestersUpdateSecurity security;
    public AndroidpublisherEditsTestersUpdateRequest withSecurity(AndroidpublisherEditsTestersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}