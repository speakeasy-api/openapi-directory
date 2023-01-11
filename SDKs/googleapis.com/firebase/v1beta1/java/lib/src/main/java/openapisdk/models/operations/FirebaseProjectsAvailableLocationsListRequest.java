package openapisdk.models.operations;



public class FirebaseProjectsAvailableLocationsListRequest {
    public FirebaseProjectsAvailableLocationsListPathParams pathParams;
    public FirebaseProjectsAvailableLocationsListRequest withPathParams(FirebaseProjectsAvailableLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsAvailableLocationsListQueryParams queryParams;
    public FirebaseProjectsAvailableLocationsListRequest withQueryParams(FirebaseProjectsAvailableLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FirebaseProjectsAvailableLocationsListSecurity security;
    public FirebaseProjectsAvailableLocationsListRequest withSecurity(FirebaseProjectsAvailableLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}