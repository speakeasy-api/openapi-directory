package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesServicesCreateRequest {
    public RunNamespacesServicesCreatePathParams pathParams;
    public RunNamespacesServicesCreateRequest withPathParams(RunNamespacesServicesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesServicesCreateQueryParams queryParams;
    public RunNamespacesServicesCreateRequest withQueryParams(RunNamespacesServicesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceInput request;
    public RunNamespacesServicesCreateRequest withRequest(openapisdk.models.shared.ServiceInput request) {
        this.request = request;
        return this;
    }
    public RunNamespacesServicesCreateSecurity security;
    public RunNamespacesServicesCreateRequest withSecurity(RunNamespacesServicesCreateSecurity security) {
        this.security = security;
        return this;
    }
}