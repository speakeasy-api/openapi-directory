package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSiteRequest {
    public UpdateSitePathParams pathParams;
    public UpdateSiteRequest withPathParams(UpdateSitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SiteOptions request;
    public UpdateSiteRequest withRequest(openapisdk.models.shared.SiteOptions request) {
        this.request = request;
        return this;
    }
    public UpdateSiteSecurity security;
    public UpdateSiteRequest withSecurity(UpdateSiteSecurity security) {
        this.security = security;
        return this;
    }
}