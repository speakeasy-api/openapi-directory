package openapisdk.models.operations;



public class StorageBucketsGetIamPolicyRequest {
    public StorageBucketsGetIamPolicyPathParams pathParams;
    public StorageBucketsGetIamPolicyRequest withPathParams(StorageBucketsGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketsGetIamPolicyQueryParams queryParams;
    public StorageBucketsGetIamPolicyRequest withQueryParams(StorageBucketsGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageBucketsGetIamPolicySecurity security;
    public StorageBucketsGetIamPolicyRequest withSecurity(StorageBucketsGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}