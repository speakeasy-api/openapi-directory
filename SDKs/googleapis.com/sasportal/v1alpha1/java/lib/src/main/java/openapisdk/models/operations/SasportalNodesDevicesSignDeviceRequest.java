package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesDevicesSignDeviceRequest {
    public SasportalNodesDevicesSignDevicePathParams pathParams;
    public SasportalNodesDevicesSignDeviceRequest withPathParams(SasportalNodesDevicesSignDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SasportalNodesDevicesSignDeviceQueryParams queryParams;
    public SasportalNodesDevicesSignDeviceRequest withQueryParams(SasportalNodesDevicesSignDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalSignDeviceRequestInput request;
    public SasportalNodesDevicesSignDeviceRequest withRequest(openapisdk.models.shared.SasPortalSignDeviceRequestInput request) {
        this.request = request;
        return this;
    }
    public SasportalNodesDevicesSignDeviceSecurity security;
    public SasportalNodesDevicesSignDeviceRequest withSecurity(SasportalNodesDevicesSignDeviceSecurity security) {
        this.security = security;
        return this;
    }
}