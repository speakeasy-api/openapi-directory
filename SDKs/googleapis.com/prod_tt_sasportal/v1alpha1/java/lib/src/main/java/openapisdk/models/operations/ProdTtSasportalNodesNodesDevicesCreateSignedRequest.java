package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesDevicesCreateSignedRequest {
    public ProdTtSasportalNodesNodesDevicesCreateSignedPathParams pathParams;
    public ProdTtSasportalNodesNodesDevicesCreateSignedRequest withPathParams(ProdTtSasportalNodesNodesDevicesCreateSignedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProdTtSasportalNodesNodesDevicesCreateSignedQueryParams queryParams;
    public ProdTtSasportalNodesNodesDevicesCreateSignedRequest withQueryParams(ProdTtSasportalNodesNodesDevicesCreateSignedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalCreateSignedDeviceRequest request;
    public ProdTtSasportalNodesNodesDevicesCreateSignedRequest withRequest(openapisdk.models.shared.SasPortalCreateSignedDeviceRequest request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalNodesNodesDevicesCreateSignedSecurity security;
    public ProdTtSasportalNodesNodesDevicesCreateSignedRequest withSecurity(ProdTtSasportalNodesNodesDevicesCreateSignedSecurity security) {
        this.security = security;
        return this;
    }
}