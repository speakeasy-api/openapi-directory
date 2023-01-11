package openapisdk.models.operations;



public class FirebaseProjectsAndroidAppsListRequest {
    public FirebaseProjectsAndroidAppsListPathParams pathParams;
    public FirebaseProjectsAndroidAppsListRequest withPathParams(FirebaseProjectsAndroidAppsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsAndroidAppsListQueryParams queryParams;
    public FirebaseProjectsAndroidAppsListRequest withQueryParams(FirebaseProjectsAndroidAppsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FirebaseProjectsAndroidAppsListSecurity security;
    public FirebaseProjectsAndroidAppsListRequest withSecurity(FirebaseProjectsAndroidAppsListSecurity security) {
        this.security = security;
        return this;
    }
}