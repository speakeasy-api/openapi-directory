package openapisdk.models.operations;



public class FirebaseProjectsSearchAppsRequest {
    public FirebaseProjectsSearchAppsPathParams pathParams;
    public FirebaseProjectsSearchAppsRequest withPathParams(FirebaseProjectsSearchAppsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsSearchAppsQueryParams queryParams;
    public FirebaseProjectsSearchAppsRequest withQueryParams(FirebaseProjectsSearchAppsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FirebaseProjectsSearchAppsSecurity security;
    public FirebaseProjectsSearchAppsRequest withSecurity(FirebaseProjectsSearchAppsSecurity security) {
        this.security = security;
        return this;
    }
}