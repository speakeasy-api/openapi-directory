package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersDatasetAggregateRequest {
    public FitnessUsersDatasetAggregatePathParams pathParams;
    public FitnessUsersDatasetAggregateRequest withPathParams(FitnessUsersDatasetAggregatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FitnessUsersDatasetAggregateQueryParams queryParams;
    public FitnessUsersDatasetAggregateRequest withQueryParams(FitnessUsersDatasetAggregateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AggregateRequest request;
    public FitnessUsersDatasetAggregateRequest withRequest(openapisdk.models.shared.AggregateRequest request) {
        this.request = request;
        return this;
    }
    public FitnessUsersDatasetAggregateSecurity security;
    public FitnessUsersDatasetAggregateRequest withSecurity(FitnessUsersDatasetAggregateSecurity security) {
        this.security = security;
        return this;
    }
}