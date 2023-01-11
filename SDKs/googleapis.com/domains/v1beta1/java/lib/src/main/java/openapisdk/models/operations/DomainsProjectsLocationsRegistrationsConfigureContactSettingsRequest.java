package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest {
    public DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams pathParams;
    public DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest withPathParams(DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams queryParams;
    public DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest withQueryParams(DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfigureContactSettingsRequest request;
    public DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest withRequest(openapisdk.models.shared.ConfigureContactSettingsRequest request) {
        this.request = request;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity security;
    public DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest withSecurity(DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity security) {
        this.security = security;
        return this;
    }
}