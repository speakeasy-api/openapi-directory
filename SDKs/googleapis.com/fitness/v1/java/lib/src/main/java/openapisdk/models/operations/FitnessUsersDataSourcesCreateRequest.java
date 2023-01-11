package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDataSourcesCreateRequest {
    public FitnessUsersDataSourcesCreatePathParams pathParams;
    public FitnessUsersDataSourcesCreateRequest withPathParams(FitnessUsersDataSourcesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FitnessUsersDataSourcesCreateQueryParams queryParams;
    public FitnessUsersDataSourcesCreateRequest withQueryParams(FitnessUsersDataSourcesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DataSource request;
    public FitnessUsersDataSourcesCreateRequest withRequest(openapisdk.models.shared.DataSource request) {
        this.request = request;
        return this;
    }
    public FitnessUsersDataSourcesCreateSecurity security;
    public FitnessUsersDataSourcesCreateRequest withSecurity(FitnessUsersDataSourcesCreateSecurity security) {
        this.security = security;
        return this;
    }
}