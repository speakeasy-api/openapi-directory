package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesCreateRequest {
    public AccesscontextmanagerAccessPoliciesCreateQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesCreateRequest withQueryParams(AccesscontextmanagerAccessPoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccessPolicy request;
    public AccesscontextmanagerAccessPoliciesCreateRequest withRequest(openapisdk.models.shared.AccessPolicy request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesCreateSecurity security;
    public AccesscontextmanagerAccessPoliciesCreateRequest withSecurity(AccesscontextmanagerAccessPoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}