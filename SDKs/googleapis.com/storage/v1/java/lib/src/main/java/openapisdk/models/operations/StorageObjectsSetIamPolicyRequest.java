package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsSetIamPolicyRequest {
    public StorageObjectsSetIamPolicyPathParams pathParams;
    public StorageObjectsSetIamPolicyRequest withPathParams(StorageObjectsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsSetIamPolicyQueryParams queryParams;
    public StorageObjectsSetIamPolicyRequest withQueryParams(StorageObjectsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Policy request;
    public StorageObjectsSetIamPolicyRequest withRequest(openapisdk.models.shared.Policy request) {
        this.request = request;
        return this;
    }
    public StorageObjectsSetIamPolicySecurity security;
    public StorageObjectsSetIamPolicyRequest withSecurity(StorageObjectsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}