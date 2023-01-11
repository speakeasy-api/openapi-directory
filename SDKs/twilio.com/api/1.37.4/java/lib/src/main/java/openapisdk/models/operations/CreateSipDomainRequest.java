package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipDomainRequest {
    public String serverURL;
    public CreateSipDomainRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSipDomainPathParams pathParams;
    public CreateSipDomainRequest withPathParams(CreateSipDomainPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSipDomainCreateSipDomainRequest request;
    public CreateSipDomainRequest withRequest(CreateSipDomainCreateSipDomainRequest request) {
        this.request = request;
        return this;
    }
    public CreateSipDomainSecurity security;
    public CreateSipDomainRequest withSecurity(CreateSipDomainSecurity security) {
        this.security = security;
        return this;
    }
}