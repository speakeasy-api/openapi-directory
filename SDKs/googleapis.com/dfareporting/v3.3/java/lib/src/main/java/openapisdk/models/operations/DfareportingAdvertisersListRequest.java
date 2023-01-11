package openapisdk.models.operations;



public class DfareportingAdvertisersListRequest {
    public DfareportingAdvertisersListPathParams pathParams;
    public DfareportingAdvertisersListRequest withPathParams(DfareportingAdvertisersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdvertisersListQueryParams queryParams;
    public DfareportingAdvertisersListRequest withQueryParams(DfareportingAdvertisersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingAdvertisersListSecurity security;
    public DfareportingAdvertisersListRequest withSecurity(DfareportingAdvertisersListSecurity security) {
        this.security = security;
        return this;
    }
}