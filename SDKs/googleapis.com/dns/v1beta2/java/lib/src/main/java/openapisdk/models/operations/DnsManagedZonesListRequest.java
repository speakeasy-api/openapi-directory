package openapisdk.models.operations;



public class DnsManagedZonesListRequest {
    public DnsManagedZonesListPathParams pathParams;
    public DnsManagedZonesListRequest withPathParams(DnsManagedZonesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZonesListQueryParams queryParams;
    public DnsManagedZonesListRequest withQueryParams(DnsManagedZonesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsManagedZonesListSecurity security;
    public DnsManagedZonesListRequest withSecurity(DnsManagedZonesListSecurity security) {
        this.security = security;
        return this;
    }
}