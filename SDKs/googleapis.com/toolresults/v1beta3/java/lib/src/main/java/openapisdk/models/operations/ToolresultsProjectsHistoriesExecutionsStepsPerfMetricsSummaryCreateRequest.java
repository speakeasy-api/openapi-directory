package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest {
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams pathParams;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest withPathParams(ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams queryParams;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest withQueryParams(ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PerfMetricsSummary request;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest withRequest(openapisdk.models.shared.PerfMetricsSummary request) {
        this.request = request;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity security;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest withSecurity(ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity security) {
        this.security = security;
        return this;
    }
}