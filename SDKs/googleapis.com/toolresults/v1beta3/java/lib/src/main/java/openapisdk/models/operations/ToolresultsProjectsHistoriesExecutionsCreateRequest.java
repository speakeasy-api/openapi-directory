package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsCreateRequest {
    public ToolresultsProjectsHistoriesExecutionsCreatePathParams pathParams;
    public ToolresultsProjectsHistoriesExecutionsCreateRequest withPathParams(ToolresultsProjectsHistoriesExecutionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsCreateQueryParams queryParams;
    public ToolresultsProjectsHistoriesExecutionsCreateRequest withQueryParams(ToolresultsProjectsHistoriesExecutionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Execution request;
    public ToolresultsProjectsHistoriesExecutionsCreateRequest withRequest(openapisdk.models.shared.Execution request) {
        this.request = request;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsCreateSecurity security;
    public ToolresultsProjectsHistoriesExecutionsCreateRequest withSecurity(ToolresultsProjectsHistoriesExecutionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}