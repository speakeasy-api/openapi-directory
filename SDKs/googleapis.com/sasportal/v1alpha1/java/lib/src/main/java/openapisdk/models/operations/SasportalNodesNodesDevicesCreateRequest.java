package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesDevicesCreateRequest {
    public SasportalNodesNodesDevicesCreatePathParams pathParams;
    public SasportalNodesNodesDevicesCreateRequest withPathParams(SasportalNodesNodesDevicesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SasportalNodesNodesDevicesCreateQueryParams queryParams;
    public SasportalNodesNodesDevicesCreateRequest withQueryParams(SasportalNodesNodesDevicesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalDeviceInput request;
    public SasportalNodesNodesDevicesCreateRequest withRequest(openapisdk.models.shared.SasPortalDeviceInput request) {
        this.request = request;
        return this;
    }
    public SasportalNodesNodesDevicesCreateSecurity security;
    public SasportalNodesNodesDevicesCreateRequest withSecurity(SasportalNodesNodesDevicesCreateSecurity security) {
        this.security = security;
        return this;
    }
}