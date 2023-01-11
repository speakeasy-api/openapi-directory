package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest {
    public CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams pathParams;
    public CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest withPathParams(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest withQueryParams(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnbindDeviceFromGatewayRequest request;
    public CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest withRequest(openapisdk.models.shared.UnbindDeviceFromGatewayRequest request) {
        this.request = request;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity security;
    public CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest withSecurity(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity security) {
        this.security = security;
        return this;
    }
}