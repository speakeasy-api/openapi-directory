package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsTestersPatchRequest {
    public AndroidpublisherEditsTestersPatchPathParams pathParams;
    public AndroidpublisherEditsTestersPatchRequest withPathParams(AndroidpublisherEditsTestersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsTestersPatchQueryParams queryParams;
    public AndroidpublisherEditsTestersPatchRequest withQueryParams(AndroidpublisherEditsTestersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Testers request;
    public AndroidpublisherEditsTestersPatchRequest withRequest(openapisdk.models.shared.Testers request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsTestersPatchSecurity security;
    public AndroidpublisherEditsTestersPatchRequest withSecurity(AndroidpublisherEditsTestersPatchSecurity security) {
        this.security = security;
        return this;
    }
}