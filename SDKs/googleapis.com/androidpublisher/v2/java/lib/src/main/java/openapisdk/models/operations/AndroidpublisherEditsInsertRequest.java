package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsInsertRequest {
    public AndroidpublisherEditsInsertPathParams pathParams;
    public AndroidpublisherEditsInsertRequest withPathParams(AndroidpublisherEditsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsInsertQueryParams queryParams;
    public AndroidpublisherEditsInsertRequest withQueryParams(AndroidpublisherEditsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppEdit request;
    public AndroidpublisherEditsInsertRequest withRequest(openapisdk.models.shared.AppEdit request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsInsertSecurity security;
    public AndroidpublisherEditsInsertRequest withSecurity(AndroidpublisherEditsInsertSecurity security) {
        this.security = security;
        return this;
    }
}