package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest {
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyPathParams pathParams;
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest withPathParams(DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyQueryParams queryParams;
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest withQueryParams(DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicySecurity security;
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest withSecurity(DataprocProjectsRegionsWorkflowTemplatesGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}