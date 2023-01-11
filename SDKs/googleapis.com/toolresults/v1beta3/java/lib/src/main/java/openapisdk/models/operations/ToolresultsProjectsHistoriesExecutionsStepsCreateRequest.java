package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsCreateRequest {
    public ToolresultsProjectsHistoriesExecutionsStepsCreatePathParams pathParams;
    public ToolresultsProjectsHistoriesExecutionsStepsCreateRequest withPathParams(ToolresultsProjectsHistoriesExecutionsStepsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsCreateQueryParams queryParams;
    public ToolresultsProjectsHistoriesExecutionsStepsCreateRequest withQueryParams(ToolresultsProjectsHistoriesExecutionsStepsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Step request;
    public ToolresultsProjectsHistoriesExecutionsStepsCreateRequest withRequest(openapisdk.models.shared.Step request) {
        this.request = request;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsCreateSecurity security;
    public ToolresultsProjectsHistoriesExecutionsStepsCreateRequest withSecurity(ToolresultsProjectsHistoriesExecutionsStepsCreateSecurity security) {
        this.security = security;
        return this;
    }
}