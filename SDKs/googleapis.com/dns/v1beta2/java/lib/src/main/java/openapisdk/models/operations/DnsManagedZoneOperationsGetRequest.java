package openapisdk.models.operations;



public class DnsManagedZoneOperationsGetRequest {
    public DnsManagedZoneOperationsGetPathParams pathParams;
    public DnsManagedZoneOperationsGetRequest withPathParams(DnsManagedZoneOperationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZoneOperationsGetQueryParams queryParams;
    public DnsManagedZoneOperationsGetRequest withQueryParams(DnsManagedZoneOperationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsManagedZoneOperationsGetSecurity security;
    public DnsManagedZoneOperationsGetRequest withSecurity(DnsManagedZoneOperationsGetSecurity security) {
        this.security = security;
        return this;
    }
}