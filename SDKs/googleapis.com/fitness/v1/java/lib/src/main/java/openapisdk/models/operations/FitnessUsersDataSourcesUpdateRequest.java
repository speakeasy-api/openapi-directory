package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDataSourcesUpdateRequest {
    public FitnessUsersDataSourcesUpdatePathParams pathParams;
    public FitnessUsersDataSourcesUpdateRequest withPathParams(FitnessUsersDataSourcesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FitnessUsersDataSourcesUpdateQueryParams queryParams;
    public FitnessUsersDataSourcesUpdateRequest withQueryParams(FitnessUsersDataSourcesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DataSource request;
    public FitnessUsersDataSourcesUpdateRequest withRequest(openapisdk.models.shared.DataSource request) {
        this.request = request;
        return this;
    }
    public FitnessUsersDataSourcesUpdateSecurity security;
    public FitnessUsersDataSourcesUpdateRequest withSecurity(FitnessUsersDataSourcesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}