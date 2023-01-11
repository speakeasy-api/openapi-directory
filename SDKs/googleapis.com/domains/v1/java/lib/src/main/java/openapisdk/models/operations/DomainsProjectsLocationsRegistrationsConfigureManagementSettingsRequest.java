package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest {
    public DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams pathParams;
    public DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest withPathParams(DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams queryParams;
    public DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest withQueryParams(DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfigureManagementSettingsRequestInput request;
    public DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest withRequest(openapisdk.models.shared.ConfigureManagementSettingsRequestInput request) {
        this.request = request;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity security;
    public DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest withSecurity(DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity security) {
        this.security = security;
        return this;
    }
}