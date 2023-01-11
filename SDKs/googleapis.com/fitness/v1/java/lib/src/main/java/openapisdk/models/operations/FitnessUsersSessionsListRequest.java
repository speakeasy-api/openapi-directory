package openapisdk.models.operations;



public class FitnessUsersSessionsListRequest {
    public FitnessUsersSessionsListPathParams pathParams;
    public FitnessUsersSessionsListRequest withPathParams(FitnessUsersSessionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FitnessUsersSessionsListQueryParams queryParams;
    public FitnessUsersSessionsListRequest withQueryParams(FitnessUsersSessionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FitnessUsersSessionsListSecurity security;
    public FitnessUsersSessionsListRequest withSecurity(FitnessUsersSessionsListSecurity security) {
        this.security = security;
        return this;
    }
}