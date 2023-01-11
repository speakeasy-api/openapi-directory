package openapisdk.models.operations;



public class DfareportingAccountUserProfilesListRequest {
    public DfareportingAccountUserProfilesListPathParams pathParams;
    public DfareportingAccountUserProfilesListRequest withPathParams(DfareportingAccountUserProfilesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAccountUserProfilesListQueryParams queryParams;
    public DfareportingAccountUserProfilesListRequest withQueryParams(DfareportingAccountUserProfilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingAccountUserProfilesListSecurity security;
    public DfareportingAccountUserProfilesListRequest withSecurity(DfareportingAccountUserProfilesListSecurity security) {
        this.security = security;
        return this;
    }
}