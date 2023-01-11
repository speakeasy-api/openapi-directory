package openapisdk.models.operations;



public class DfareportingOperatingSystemsListRequest {
    public DfareportingOperatingSystemsListPathParams pathParams;
    public DfareportingOperatingSystemsListRequest withPathParams(DfareportingOperatingSystemsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingOperatingSystemsListQueryParams queryParams;
    public DfareportingOperatingSystemsListRequest withQueryParams(DfareportingOperatingSystemsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingOperatingSystemsListSecurity security;
    public DfareportingOperatingSystemsListRequest withSecurity(DfareportingOperatingSystemsListSecurity security) {
        this.security = security;
        return this;
    }
}