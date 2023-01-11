package openapisdk.models.operations;



public class StorageBucketsLockRetentionPolicyRequest {
    public StorageBucketsLockRetentionPolicyPathParams pathParams;
    public StorageBucketsLockRetentionPolicyRequest withPathParams(StorageBucketsLockRetentionPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketsLockRetentionPolicyQueryParams queryParams;
    public StorageBucketsLockRetentionPolicyRequest withQueryParams(StorageBucketsLockRetentionPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageBucketsLockRetentionPolicySecurity security;
    public StorageBucketsLockRetentionPolicyRequest withSecurity(StorageBucketsLockRetentionPolicySecurity security) {
        this.security = security;
        return this;
    }
}