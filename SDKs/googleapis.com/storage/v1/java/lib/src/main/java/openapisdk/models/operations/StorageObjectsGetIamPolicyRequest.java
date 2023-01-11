package openapisdk.models.operations;



public class StorageObjectsGetIamPolicyRequest {
    public StorageObjectsGetIamPolicyPathParams pathParams;
    public StorageObjectsGetIamPolicyRequest withPathParams(StorageObjectsGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsGetIamPolicyQueryParams queryParams;
    public StorageObjectsGetIamPolicyRequest withQueryParams(StorageObjectsGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageObjectsGetIamPolicySecurity security;
    public StorageObjectsGetIamPolicyRequest withSecurity(StorageObjectsGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}