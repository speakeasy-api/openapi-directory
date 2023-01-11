package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest {
    public CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams pathParams;
    public CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest withPathParams(CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest withQueryParams(CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BindDeviceToGatewayRequest request;
    public CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest withRequest(openapisdk.models.shared.BindDeviceToGatewayRequest request) {
        this.request = request;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity security;
    public CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest withSecurity(CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity security) {
        this.security = security;
        return this;
    }
}