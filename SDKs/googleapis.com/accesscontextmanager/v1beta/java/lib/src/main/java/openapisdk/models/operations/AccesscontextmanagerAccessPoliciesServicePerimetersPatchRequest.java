package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest {
    public AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams pathParams;
    public AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest withPathParams(AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest withQueryParams(AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServicePerimeter request;
    public AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest withRequest(openapisdk.models.shared.ServicePerimeter request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity security;
    public AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest withSecurity(AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity security) {
        this.security = security;
        return this;
    }
}