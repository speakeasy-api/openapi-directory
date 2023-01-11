package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest {
    public AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams pathParams;
    public AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest withPathParams(AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest withQueryParams(AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServicePerimeter request;
    public AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest withRequest(openapisdk.models.shared.ServicePerimeter request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity security;
    public AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest withSecurity(AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity security) {
        this.security = security;
        return this;
    }
}