package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest {
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreatePathParams pathParams;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest withPathParams(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateQueryParams queryParams;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest withQueryParams(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchCreatePerfSamplesRequest request;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest withRequest(openapisdk.models.shared.BatchCreatePerfSamplesRequest request) {
        this.request = request;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateSecurity security;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest withSecurity(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateSecurity security) {
        this.security = security;
        return this;
    }
}