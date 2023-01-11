package openapisdk.models.operations;



public class DnsManagedZoneOperationsListRequest {
    public DnsManagedZoneOperationsListPathParams pathParams;
    public DnsManagedZoneOperationsListRequest withPathParams(DnsManagedZoneOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZoneOperationsListQueryParams queryParams;
    public DnsManagedZoneOperationsListRequest withQueryParams(DnsManagedZoneOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsManagedZoneOperationsListSecurity security;
    public DnsManagedZoneOperationsListRequest withSecurity(DnsManagedZoneOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}