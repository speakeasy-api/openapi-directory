package openapisdk.models.operations;



public class DfareportingUserProfilesGetRequest {
    public DfareportingUserProfilesGetPathParams pathParams;
    public DfareportingUserProfilesGetRequest withPathParams(DfareportingUserProfilesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingUserProfilesGetQueryParams queryParams;
    public DfareportingUserProfilesGetRequest withQueryParams(DfareportingUserProfilesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingUserProfilesGetSecurity security;
    public DfareportingUserProfilesGetRequest withSecurity(DfareportingUserProfilesGetSecurity security) {
        this.security = security;
        return this;
    }
}