package openapisdk.models.operations;



public class DfareportingOperatingSystemVersionsListRequest {
    public DfareportingOperatingSystemVersionsListPathParams pathParams;
    public DfareportingOperatingSystemVersionsListRequest withPathParams(DfareportingOperatingSystemVersionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingOperatingSystemVersionsListQueryParams queryParams;
    public DfareportingOperatingSystemVersionsListRequest withQueryParams(DfareportingOperatingSystemVersionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingOperatingSystemVersionsListSecurity security;
    public DfareportingOperatingSystemVersionsListRequest withSecurity(DfareportingOperatingSystemVersionsListSecurity security) {
        this.security = security;
        return this;
    }
}