package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest {
    public DataprocProjectsRegionsWorkflowTemplatesInstantiatePathParams pathParams;
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest withPathParams(DataprocProjectsRegionsWorkflowTemplatesInstantiatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateQueryParams queryParams;
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest withQueryParams(DataprocProjectsRegionsWorkflowTemplatesInstantiateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstantiateWorkflowTemplateRequest request;
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest withRequest(openapisdk.models.shared.InstantiateWorkflowTemplateRequest request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateSecurity security;
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest withSecurity(DataprocProjectsRegionsWorkflowTemplatesInstantiateSecurity security) {
        this.security = security;
        return this;
    }
}