package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainCertV4Request {
    public String serverURL;
    public UpdateDomainCertV4Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDomainCertV4PathParams pathParams;
    public UpdateDomainCertV4Request withPathParams(UpdateDomainCertV4PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDomainCertV4UpdateDomainCertV4Request request;
    public UpdateDomainCertV4Request withRequest(UpdateDomainCertV4UpdateDomainCertV4Request request) {
        this.request = request;
        return this;
    }
    public UpdateDomainCertV4Security security;
    public UpdateDomainCertV4Request withSecurity(UpdateDomainCertV4Security security) {
        this.security = security;
        return this;
    }
}