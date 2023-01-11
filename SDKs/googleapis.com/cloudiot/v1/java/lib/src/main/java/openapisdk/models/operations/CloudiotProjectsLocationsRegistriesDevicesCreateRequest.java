package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesDevicesCreateRequest {
    public CloudiotProjectsLocationsRegistriesDevicesCreatePathParams pathParams;
    public CloudiotProjectsLocationsRegistriesDevicesCreateRequest withPathParams(CloudiotProjectsLocationsRegistriesDevicesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesDevicesCreateRequest withQueryParams(CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Device request;
    public CloudiotProjectsLocationsRegistriesDevicesCreateRequest withRequest(openapisdk.models.shared.Device request) {
        this.request = request;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesDevicesCreateSecurity security;
    public CloudiotProjectsLocationsRegistriesDevicesCreateRequest withSecurity(CloudiotProjectsLocationsRegistriesDevicesCreateSecurity security) {
        this.security = security;
        return this;
    }
}