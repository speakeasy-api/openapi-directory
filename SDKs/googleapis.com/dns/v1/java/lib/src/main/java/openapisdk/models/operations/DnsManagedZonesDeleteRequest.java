package openapisdk.models.operations;



public class DnsManagedZonesDeleteRequest {
    public DnsManagedZonesDeletePathParams pathParams;
    public DnsManagedZonesDeleteRequest withPathParams(DnsManagedZonesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZonesDeleteQueryParams queryParams;
    public DnsManagedZonesDeleteRequest withQueryParams(DnsManagedZonesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsManagedZonesDeleteSecurity security;
    public DnsManagedZonesDeleteRequest withSecurity(DnsManagedZonesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}