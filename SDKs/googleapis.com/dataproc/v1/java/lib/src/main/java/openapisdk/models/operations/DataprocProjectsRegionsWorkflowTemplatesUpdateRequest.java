package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesUpdateRequest {
    public DataprocProjectsRegionsWorkflowTemplatesUpdatePathParams pathParams;
    public DataprocProjectsRegionsWorkflowTemplatesUpdateRequest withPathParams(DataprocProjectsRegionsWorkflowTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesUpdateQueryParams queryParams;
    public DataprocProjectsRegionsWorkflowTemplatesUpdateRequest withQueryParams(DataprocProjectsRegionsWorkflowTemplatesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkflowTemplateInput request;
    public DataprocProjectsRegionsWorkflowTemplatesUpdateRequest withRequest(openapisdk.models.shared.WorkflowTemplateInput request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesUpdateSecurity security;
    public DataprocProjectsRegionsWorkflowTemplatesUpdateRequest withSecurity(DataprocProjectsRegionsWorkflowTemplatesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}