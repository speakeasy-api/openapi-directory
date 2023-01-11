package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainConfigRequest {
    public String serverURL;
    public UpdateDomainConfigRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDomainConfigPathParams pathParams;
    public UpdateDomainConfigRequest withPathParams(UpdateDomainConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDomainConfigUpdateDomainConfigRequest request;
    public UpdateDomainConfigRequest withRequest(UpdateDomainConfigUpdateDomainConfigRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDomainConfigSecurity security;
    public UpdateDomainConfigRequest withSecurity(UpdateDomainConfigSecurity security) {
        this.security = security;
        return this;
    }
}