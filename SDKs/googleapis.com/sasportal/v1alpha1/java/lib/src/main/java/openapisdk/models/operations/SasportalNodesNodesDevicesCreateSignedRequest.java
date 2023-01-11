package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesDevicesCreateSignedRequest {
    public SasportalNodesNodesDevicesCreateSignedPathParams pathParams;
    public SasportalNodesNodesDevicesCreateSignedRequest withPathParams(SasportalNodesNodesDevicesCreateSignedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SasportalNodesNodesDevicesCreateSignedQueryParams queryParams;
    public SasportalNodesNodesDevicesCreateSignedRequest withQueryParams(SasportalNodesNodesDevicesCreateSignedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalCreateSignedDeviceRequest request;
    public SasportalNodesNodesDevicesCreateSignedRequest withRequest(openapisdk.models.shared.SasPortalCreateSignedDeviceRequest request) {
        this.request = request;
        return this;
    }
    public SasportalNodesNodesDevicesCreateSignedSecurity security;
    public SasportalNodesNodesDevicesCreateSignedRequest withSecurity(SasportalNodesNodesDevicesCreateSignedSecurity security) {
        this.security = security;
        return this;
    }
}