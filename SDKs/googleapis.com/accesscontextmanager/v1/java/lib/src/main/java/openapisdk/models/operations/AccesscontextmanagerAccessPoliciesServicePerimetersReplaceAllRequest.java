package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest {
    public AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams pathParams;
    public AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest withPathParams(AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest withQueryParams(AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReplaceServicePerimetersRequest request;
    public AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest withRequest(openapisdk.models.shared.ReplaceServicePerimetersRequest request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity security;
    public AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest withSecurity(AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity security) {
        this.security = security;
        return this;
    }
}