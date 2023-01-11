package openapisdk.models.operations;



public class CloudassetAnalyzeIamPolicyRequest {
    public CloudassetAnalyzeIamPolicyPathParams pathParams;
    public CloudassetAnalyzeIamPolicyRequest withPathParams(CloudassetAnalyzeIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudassetAnalyzeIamPolicyQueryParams queryParams;
    public CloudassetAnalyzeIamPolicyRequest withQueryParams(CloudassetAnalyzeIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudassetAnalyzeIamPolicySecurity security;
    public CloudassetAnalyzeIamPolicyRequest withSecurity(CloudassetAnalyzeIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}