package openapisdk.models.operations;



public class SasportalNodesNodesGetRequest {
    public SasportalNodesNodesGetPathParams pathParams;
    public SasportalNodesNodesGetRequest withPathParams(SasportalNodesNodesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SasportalNodesNodesGetQueryParams queryParams;
    public SasportalNodesNodesGetRequest withQueryParams(SasportalNodesNodesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SasportalNodesNodesGetSecurity security;
    public SasportalNodesNodesGetRequest withSecurity(SasportalNodesNodesGetSecurity security) {
        this.security = security;
        return this;
    }
}