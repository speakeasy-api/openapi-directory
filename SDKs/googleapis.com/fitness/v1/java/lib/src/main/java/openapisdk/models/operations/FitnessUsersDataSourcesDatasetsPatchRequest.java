package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDataSourcesDatasetsPatchRequest {
    public FitnessUsersDataSourcesDatasetsPatchPathParams pathParams;
    public FitnessUsersDataSourcesDatasetsPatchRequest withPathParams(FitnessUsersDataSourcesDatasetsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FitnessUsersDataSourcesDatasetsPatchQueryParams queryParams;
    public FitnessUsersDataSourcesDatasetsPatchRequest withQueryParams(FitnessUsersDataSourcesDatasetsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Dataset request;
    public FitnessUsersDataSourcesDatasetsPatchRequest withRequest(openapisdk.models.shared.Dataset request) {
        this.request = request;
        return this;
    }
    public FitnessUsersDataSourcesDatasetsPatchSecurity security;
    public FitnessUsersDataSourcesDatasetsPatchRequest withSecurity(FitnessUsersDataSourcesDatasetsPatchSecurity security) {
        this.security = security;
        return this;
    }
}