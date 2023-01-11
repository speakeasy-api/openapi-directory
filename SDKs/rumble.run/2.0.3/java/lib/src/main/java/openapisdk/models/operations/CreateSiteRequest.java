package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSiteRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SiteOptions request;
    public CreateSiteRequest withRequest(openapisdk.models.shared.SiteOptions request) {
        this.request = request;
        return this;
    }
    public CreateSiteSecurity security;
    public CreateSiteRequest withSecurity(CreateSiteSecurity security) {
        this.security = security;
        return this;
    }
}