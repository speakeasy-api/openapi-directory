package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsPatchRequest {
    public DomainsProjectsLocationsRegistrationsPatchPathParams pathParams;
    public DomainsProjectsLocationsRegistrationsPatchRequest withPathParams(DomainsProjectsLocationsRegistrationsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsPatchQueryParams queryParams;
    public DomainsProjectsLocationsRegistrationsPatchRequest withQueryParams(DomainsProjectsLocationsRegistrationsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegistrationInput request;
    public DomainsProjectsLocationsRegistrationsPatchRequest withRequest(openapisdk.models.shared.RegistrationInput request) {
        this.request = request;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsPatchSecurity security;
    public DomainsProjectsLocationsRegistrationsPatchRequest withSecurity(DomainsProjectsLocationsRegistrationsPatchSecurity security) {
        this.security = security;
        return this;
    }
}