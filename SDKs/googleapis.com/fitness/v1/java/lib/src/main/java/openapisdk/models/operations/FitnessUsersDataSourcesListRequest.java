package openapisdk.models.operations;



public class FitnessUsersDataSourcesListRequest {
    public FitnessUsersDataSourcesListPathParams pathParams;
    public FitnessUsersDataSourcesListRequest withPathParams(FitnessUsersDataSourcesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FitnessUsersDataSourcesListQueryParams queryParams;
    public FitnessUsersDataSourcesListRequest withQueryParams(FitnessUsersDataSourcesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FitnessUsersDataSourcesListSecurity security;
    public FitnessUsersDataSourcesListRequest withSecurity(FitnessUsersDataSourcesListSecurity security) {
        this.security = security;
        return this;
    }
}