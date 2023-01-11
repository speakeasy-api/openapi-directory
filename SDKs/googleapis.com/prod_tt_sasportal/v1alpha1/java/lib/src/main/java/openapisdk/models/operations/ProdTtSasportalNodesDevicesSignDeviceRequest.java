package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesDevicesSignDeviceRequest {
    public ProdTtSasportalNodesDevicesSignDevicePathParams pathParams;
    public ProdTtSasportalNodesDevicesSignDeviceRequest withPathParams(ProdTtSasportalNodesDevicesSignDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProdTtSasportalNodesDevicesSignDeviceQueryParams queryParams;
    public ProdTtSasportalNodesDevicesSignDeviceRequest withQueryParams(ProdTtSasportalNodesDevicesSignDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalSignDeviceRequestInput request;
    public ProdTtSasportalNodesDevicesSignDeviceRequest withRequest(openapisdk.models.shared.SasPortalSignDeviceRequestInput request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalNodesDevicesSignDeviceSecurity security;
    public ProdTtSasportalNodesDevicesSignDeviceRequest withSecurity(ProdTtSasportalNodesDevicesSignDeviceSecurity security) {
        this.security = security;
        return this;
    }
}