package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsPatchRequest {
    public ToolresultsProjectsHistoriesExecutionsPatchPathParams pathParams;
    public ToolresultsProjectsHistoriesExecutionsPatchRequest withPathParams(ToolresultsProjectsHistoriesExecutionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsPatchQueryParams queryParams;
    public ToolresultsProjectsHistoriesExecutionsPatchRequest withQueryParams(ToolresultsProjectsHistoriesExecutionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Execution request;
    public ToolresultsProjectsHistoriesExecutionsPatchRequest withRequest(openapisdk.models.shared.Execution request) {
        this.request = request;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsPatchSecurity security;
    public ToolresultsProjectsHistoriesExecutionsPatchRequest withSecurity(ToolresultsProjectsHistoriesExecutionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}