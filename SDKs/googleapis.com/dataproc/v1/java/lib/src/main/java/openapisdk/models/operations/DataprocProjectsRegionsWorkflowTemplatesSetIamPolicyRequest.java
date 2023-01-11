package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest {
    public DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams pathParams;
    public DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest withPathParams(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams queryParams;
    public DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest withQueryParams(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity security;
    public DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest withSecurity(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}