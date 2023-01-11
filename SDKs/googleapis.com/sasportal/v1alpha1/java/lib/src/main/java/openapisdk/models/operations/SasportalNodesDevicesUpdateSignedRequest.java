package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesDevicesUpdateSignedRequest {
    public SasportalNodesDevicesUpdateSignedPathParams pathParams;
    public SasportalNodesDevicesUpdateSignedRequest withPathParams(SasportalNodesDevicesUpdateSignedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SasportalNodesDevicesUpdateSignedQueryParams queryParams;
    public SasportalNodesDevicesUpdateSignedRequest withQueryParams(SasportalNodesDevicesUpdateSignedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalUpdateSignedDeviceRequest request;
    public SasportalNodesDevicesUpdateSignedRequest withRequest(openapisdk.models.shared.SasPortalUpdateSignedDeviceRequest request) {
        this.request = request;
        return this;
    }
    public SasportalNodesDevicesUpdateSignedSecurity security;
    public SasportalNodesDevicesUpdateSignedRequest withSecurity(SasportalNodesDevicesUpdateSignedSecurity security) {
        this.security = security;
        return this;
    }
}