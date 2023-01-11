package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesDevicesCreateRequest {
    public ProdTtSasportalNodesNodesDevicesCreatePathParams pathParams;
    public ProdTtSasportalNodesNodesDevicesCreateRequest withPathParams(ProdTtSasportalNodesNodesDevicesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProdTtSasportalNodesNodesDevicesCreateQueryParams queryParams;
    public ProdTtSasportalNodesNodesDevicesCreateRequest withQueryParams(ProdTtSasportalNodesNodesDevicesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalDeviceInput request;
    public ProdTtSasportalNodesNodesDevicesCreateRequest withRequest(openapisdk.models.shared.SasPortalDeviceInput request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalNodesNodesDevicesCreateSecurity security;
    public ProdTtSasportalNodesNodesDevicesCreateRequest withSecurity(ProdTtSasportalNodesNodesDevicesCreateSecurity security) {
        this.security = security;
        return this;
    }
}