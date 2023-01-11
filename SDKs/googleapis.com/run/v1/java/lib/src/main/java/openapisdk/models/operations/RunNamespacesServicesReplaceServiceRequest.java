package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesServicesReplaceServiceRequest {
    public RunNamespacesServicesReplaceServicePathParams pathParams;
    public RunNamespacesServicesReplaceServiceRequest withPathParams(RunNamespacesServicesReplaceServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesServicesReplaceServiceQueryParams queryParams;
    public RunNamespacesServicesReplaceServiceRequest withQueryParams(RunNamespacesServicesReplaceServiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceInput request;
    public RunNamespacesServicesReplaceServiceRequest withRequest(openapisdk.models.shared.ServiceInput request) {
        this.request = request;
        return this;
    }
    public RunNamespacesServicesReplaceServiceSecurity security;
    public RunNamespacesServicesReplaceServiceRequest withSecurity(RunNamespacesServicesReplaceServiceSecurity security) {
        this.security = security;
        return this;
    }
}