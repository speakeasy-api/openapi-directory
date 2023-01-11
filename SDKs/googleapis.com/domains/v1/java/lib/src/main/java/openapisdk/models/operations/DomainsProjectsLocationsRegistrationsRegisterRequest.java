package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsRegisterRequest {
    public DomainsProjectsLocationsRegistrationsRegisterPathParams pathParams;
    public DomainsProjectsLocationsRegistrationsRegisterRequest withPathParams(DomainsProjectsLocationsRegistrationsRegisterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsRegisterQueryParams queryParams;
    public DomainsProjectsLocationsRegistrationsRegisterRequest withQueryParams(DomainsProjectsLocationsRegistrationsRegisterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterDomainRequestInput request;
    public DomainsProjectsLocationsRegistrationsRegisterRequest withRequest(openapisdk.models.shared.RegisterDomainRequestInput request) {
        this.request = request;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsRegisterSecurity security;
    public DomainsProjectsLocationsRegistrationsRegisterRequest withSecurity(DomainsProjectsLocationsRegistrationsRegisterSecurity security) {
        this.security = security;
        return this;
    }
}