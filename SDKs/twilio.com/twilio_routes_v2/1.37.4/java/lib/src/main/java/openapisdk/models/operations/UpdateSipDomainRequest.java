package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipDomainRequest {
    public String serverURL;
    public UpdateSipDomainRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSipDomainPathParams pathParams;
    public UpdateSipDomainRequest withPathParams(UpdateSipDomainPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSipDomainUpdateSipDomainRequest request;
    public UpdateSipDomainRequest withRequest(UpdateSipDomainUpdateSipDomainRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSipDomainSecurity security;
    public UpdateSipDomainRequest withSecurity(UpdateSipDomainSecurity security) {
        this.security = security;
        return this;
    }
}