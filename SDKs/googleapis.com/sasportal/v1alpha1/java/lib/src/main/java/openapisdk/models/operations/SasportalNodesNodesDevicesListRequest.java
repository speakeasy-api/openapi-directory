package openapisdk.models.operations;



public class SasportalNodesNodesDevicesListRequest {
    public SasportalNodesNodesDevicesListPathParams pathParams;
    public SasportalNodesNodesDevicesListRequest withPathParams(SasportalNodesNodesDevicesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SasportalNodesNodesDevicesListQueryParams queryParams;
    public SasportalNodesNodesDevicesListRequest withQueryParams(SasportalNodesNodesDevicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SasportalNodesNodesDevicesListSecurity security;
    public SasportalNodesNodesDevicesListRequest withSecurity(SasportalNodesNodesDevicesListSecurity security) {
        this.security = security;
        return this;
    }
}