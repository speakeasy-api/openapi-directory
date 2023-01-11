package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest {
    public AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams pathParams;
    public AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest withPathParams(AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest withQueryParams(AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccessLevel request;
    public AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest withRequest(openapisdk.models.shared.AccessLevel request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity security;
    public AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest withSecurity(AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity security) {
        this.security = security;
        return this;
    }
}