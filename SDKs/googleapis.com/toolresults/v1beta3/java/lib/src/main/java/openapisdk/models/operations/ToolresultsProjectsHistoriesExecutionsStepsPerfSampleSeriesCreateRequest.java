package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest {
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreatePathParams pathParams;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest withPathParams(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateQueryParams queryParams;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest withQueryParams(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PerfSampleSeries request;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest withRequest(openapisdk.models.shared.PerfSampleSeries request) {
        this.request = request;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateSecurity security;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest withSecurity(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}