package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesDevicesPatchRequest {
    public CloudiotProjectsLocationsRegistriesDevicesPatchPathParams pathParams;
    public CloudiotProjectsLocationsRegistriesDevicesPatchRequest withPathParams(CloudiotProjectsLocationsRegistriesDevicesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesDevicesPatchRequest withQueryParams(CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Device request;
    public CloudiotProjectsLocationsRegistriesDevicesPatchRequest withRequest(openapisdk.models.shared.Device request) {
        this.request = request;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesDevicesPatchSecurity security;
    public CloudiotProjectsLocationsRegistriesDevicesPatchRequest withSecurity(CloudiotProjectsLocationsRegistriesDevicesPatchSecurity security) {
        this.security = security;
        return this;
    }
}