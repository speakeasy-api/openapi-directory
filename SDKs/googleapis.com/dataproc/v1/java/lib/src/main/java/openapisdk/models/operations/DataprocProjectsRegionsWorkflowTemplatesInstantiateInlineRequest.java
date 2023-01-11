package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest {
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateInlinePathParams pathParams;
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest withPathParams(DataprocProjectsRegionsWorkflowTemplatesInstantiateInlinePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineQueryParams queryParams;
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest withQueryParams(DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkflowTemplateInput request;
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest withRequest(openapisdk.models.shared.WorkflowTemplateInput request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineSecurity security;
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest withSecurity(DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineSecurity security) {
        this.security = security;
        return this;
    }
}