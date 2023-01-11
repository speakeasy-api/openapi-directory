package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesCreateRequest {
    public ToolresultsProjectsHistoriesCreatePathParams pathParams;
    public ToolresultsProjectsHistoriesCreateRequest withPathParams(ToolresultsProjectsHistoriesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsHistoriesCreateQueryParams queryParams;
    public ToolresultsProjectsHistoriesCreateRequest withQueryParams(ToolresultsProjectsHistoriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.History request;
    public ToolresultsProjectsHistoriesCreateRequest withRequest(openapisdk.models.shared.History request) {
        this.request = request;
        return this;
    }
    public ToolresultsProjectsHistoriesCreateSecurity security;
    public ToolresultsProjectsHistoriesCreateRequest withSecurity(ToolresultsProjectsHistoriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}