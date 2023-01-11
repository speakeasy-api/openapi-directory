package openapisdk.models.operations;



public class DfareportingUserProfilesListRequest {
    public DfareportingUserProfilesListQueryParams queryParams;
    public DfareportingUserProfilesListRequest withQueryParams(DfareportingUserProfilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingUserProfilesListSecurity security;
    public DfareportingUserProfilesListRequest withSecurity(DfareportingUserProfilesListSecurity security) {
        this.security = security;
        return this;
    }
}