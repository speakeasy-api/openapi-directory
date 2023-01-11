package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsWaitersCreateRequest {
    public RuntimeconfigProjectsConfigsWaitersCreatePathParams pathParams;
    public RuntimeconfigProjectsConfigsWaitersCreateRequest withPathParams(RuntimeconfigProjectsConfigsWaitersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RuntimeconfigProjectsConfigsWaitersCreateQueryParams queryParams;
    public RuntimeconfigProjectsConfigsWaitersCreateRequest withQueryParams(RuntimeconfigProjectsConfigsWaitersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Waiter request;
    public RuntimeconfigProjectsConfigsWaitersCreateRequest withRequest(openapisdk.models.shared.Waiter request) {
        this.request = request;
        return this;
    }
    public RuntimeconfigProjectsConfigsWaitersCreateSecurity security;
    public RuntimeconfigProjectsConfigsWaitersCreateRequest withSecurity(RuntimeconfigProjectsConfigsWaitersCreateSecurity security) {
        this.security = security;
        return this;
    }
}