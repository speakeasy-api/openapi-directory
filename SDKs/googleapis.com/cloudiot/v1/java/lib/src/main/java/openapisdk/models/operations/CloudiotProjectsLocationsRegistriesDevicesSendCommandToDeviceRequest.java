package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest {
    public CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevicePathParams pathParams;
    public CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest withPathParams(CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest withQueryParams(CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendCommandToDeviceRequest request;
    public CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest withRequest(openapisdk.models.shared.SendCommandToDeviceRequest request) {
        this.request = request;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity security;
    public CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest withSecurity(CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity security) {
        this.security = security;
        return this;
    }
}