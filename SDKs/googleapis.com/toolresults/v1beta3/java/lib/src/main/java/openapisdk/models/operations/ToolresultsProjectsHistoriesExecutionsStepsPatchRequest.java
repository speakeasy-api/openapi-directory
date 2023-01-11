package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsPatchRequest {
    public ToolresultsProjectsHistoriesExecutionsStepsPatchPathParams pathParams;
    public ToolresultsProjectsHistoriesExecutionsStepsPatchRequest withPathParams(ToolresultsProjectsHistoriesExecutionsStepsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsPatchQueryParams queryParams;
    public ToolresultsProjectsHistoriesExecutionsStepsPatchRequest withQueryParams(ToolresultsProjectsHistoriesExecutionsStepsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Step request;
    public ToolresultsProjectsHistoriesExecutionsStepsPatchRequest withRequest(openapisdk.models.shared.Step request) {
        this.request = request;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsPatchSecurity security;
    public ToolresultsProjectsHistoriesExecutionsStepsPatchRequest withSecurity(ToolresultsProjectsHistoriesExecutionsStepsPatchSecurity security) {
        this.security = security;
        return this;
    }
}