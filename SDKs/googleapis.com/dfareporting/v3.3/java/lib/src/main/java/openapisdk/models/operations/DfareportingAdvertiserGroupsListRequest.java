package openapisdk.models.operations;



public class DfareportingAdvertiserGroupsListRequest {
    public DfareportingAdvertiserGroupsListPathParams pathParams;
    public DfareportingAdvertiserGroupsListRequest withPathParams(DfareportingAdvertiserGroupsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdvertiserGroupsListQueryParams queryParams;
    public DfareportingAdvertiserGroupsListRequest withQueryParams(DfareportingAdvertiserGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingAdvertiserGroupsListSecurity security;
    public DfareportingAdvertiserGroupsListRequest withSecurity(DfareportingAdvertiserGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}