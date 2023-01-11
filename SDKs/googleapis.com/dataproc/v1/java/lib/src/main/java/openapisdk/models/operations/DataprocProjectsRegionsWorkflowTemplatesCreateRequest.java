package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesCreateRequest {
    public DataprocProjectsRegionsWorkflowTemplatesCreatePathParams pathParams;
    public DataprocProjectsRegionsWorkflowTemplatesCreateRequest withPathParams(DataprocProjectsRegionsWorkflowTemplatesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams queryParams;
    public DataprocProjectsRegionsWorkflowTemplatesCreateRequest withQueryParams(DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkflowTemplateInput request;
    public DataprocProjectsRegionsWorkflowTemplatesCreateRequest withRequest(openapisdk.models.shared.WorkflowTemplateInput request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesCreateSecurity security;
    public DataprocProjectsRegionsWorkflowTemplatesCreateRequest withSecurity(DataprocProjectsRegionsWorkflowTemplatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}