package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest {
    public DomainsProjectsLocationsRegistrationsConfigureDnsSettingsPathParams pathParams;
    public DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest withPathParams(DomainsProjectsLocationsRegistrationsConfigureDnsSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsConfigureDnsSettingsQueryParams queryParams;
    public DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest withQueryParams(DomainsProjectsLocationsRegistrationsConfigureDnsSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfigureDnsSettingsRequestInput request;
    public DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest withRequest(openapisdk.models.shared.ConfigureDnsSettingsRequestInput request) {
        this.request = request;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsConfigureDnsSettingsSecurity security;
    public DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest withSecurity(DomainsProjectsLocationsRegistrationsConfigureDnsSettingsSecurity security) {
        this.security = security;
        return this;
    }
}