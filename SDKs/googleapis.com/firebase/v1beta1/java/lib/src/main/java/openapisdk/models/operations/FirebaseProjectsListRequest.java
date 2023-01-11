package openapisdk.models.operations;



public class FirebaseProjectsListRequest {
    public FirebaseProjectsListQueryParams queryParams;
    public FirebaseProjectsListRequest withQueryParams(FirebaseProjectsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FirebaseProjectsListSecurity security;
    public FirebaseProjectsListRequest withSecurity(FirebaseProjectsListSecurity security) {
        this.security = security;
        return this;
    }
}