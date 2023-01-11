package openapisdk.models.operations;



public class FirebaseAvailableProjectsListRequest {
    public FirebaseAvailableProjectsListQueryParams queryParams;
    public FirebaseAvailableProjectsListRequest withQueryParams(FirebaseAvailableProjectsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FirebaseAvailableProjectsListSecurity security;
    public FirebaseAvailableProjectsListRequest withSecurity(FirebaseAvailableProjectsListSecurity security) {
        this.security = security;
        return this;
    }
}