package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesDevicesUpdateSignedRequest {
    public ProdTtSasportalNodesDevicesUpdateSignedPathParams pathParams;
    public ProdTtSasportalNodesDevicesUpdateSignedRequest withPathParams(ProdTtSasportalNodesDevicesUpdateSignedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProdTtSasportalNodesDevicesUpdateSignedQueryParams queryParams;
    public ProdTtSasportalNodesDevicesUpdateSignedRequest withQueryParams(ProdTtSasportalNodesDevicesUpdateSignedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalUpdateSignedDeviceRequest request;
    public ProdTtSasportalNodesDevicesUpdateSignedRequest withRequest(openapisdk.models.shared.SasPortalUpdateSignedDeviceRequest request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalNodesDevicesUpdateSignedSecurity security;
    public ProdTtSasportalNodesDevicesUpdateSignedRequest withSecurity(ProdTtSasportalNodesDevicesUpdateSignedSecurity security) {
        this.security = security;
        return this;
    }
}