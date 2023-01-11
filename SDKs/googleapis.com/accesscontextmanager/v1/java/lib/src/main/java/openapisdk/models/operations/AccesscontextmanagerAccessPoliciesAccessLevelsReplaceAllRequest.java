package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest {
    public AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams pathParams;
    public AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest withPathParams(AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest withQueryParams(AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReplaceAccessLevelsRequest request;
    public AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest withRequest(openapisdk.models.shared.ReplaceAccessLevelsRequest request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity security;
    public AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest withSecurity(AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity security) {
        this.security = security;
        return this;
    }
}