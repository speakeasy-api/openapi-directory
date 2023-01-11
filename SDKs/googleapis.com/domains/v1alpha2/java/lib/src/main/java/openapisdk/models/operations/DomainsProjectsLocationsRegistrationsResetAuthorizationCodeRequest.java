package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest {
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodePathParams pathParams;
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest withPathParams(DomainsProjectsLocationsRegistrationsResetAuthorizationCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodeQueryParams queryParams;
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest withQueryParams(DomainsProjectsLocationsRegistrationsResetAuthorizationCodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodeSecurity security;
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest withSecurity(DomainsProjectsLocationsRegistrationsResetAuthorizationCodeSecurity security) {
        this.security = security;
        return this;
    }
}