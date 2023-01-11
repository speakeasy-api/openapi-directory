package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsSetIamPolicyRequest {
    public StorageBucketsSetIamPolicyPathParams pathParams;
    public StorageBucketsSetIamPolicyRequest withPathParams(StorageBucketsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketsSetIamPolicyQueryParams queryParams;
    public StorageBucketsSetIamPolicyRequest withQueryParams(StorageBucketsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Policy request;
    public StorageBucketsSetIamPolicyRequest withRequest(openapisdk.models.shared.Policy request) {
        this.request = request;
        return this;
    }
    public StorageBucketsSetIamPolicySecurity security;
    public StorageBucketsSetIamPolicyRequest withSecurity(StorageBucketsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}