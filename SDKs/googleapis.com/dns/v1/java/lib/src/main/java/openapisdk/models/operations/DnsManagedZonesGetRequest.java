package openapisdk.models.operations;



public class DnsManagedZonesGetRequest {
    public DnsManagedZonesGetPathParams pathParams;
    public DnsManagedZonesGetRequest withPathParams(DnsManagedZonesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZonesGetQueryParams queryParams;
    public DnsManagedZonesGetRequest withQueryParams(DnsManagedZonesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsManagedZonesGetSecurity security;
    public DnsManagedZonesGetRequest withSecurity(DnsManagedZonesGetSecurity security) {
        this.security = security;
        return this;
    }
}