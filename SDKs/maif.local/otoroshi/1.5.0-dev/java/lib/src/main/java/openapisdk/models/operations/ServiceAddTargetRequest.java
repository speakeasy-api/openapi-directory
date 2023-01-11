package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServiceAddTargetRequest {
    public ServiceAddTargetPathParams pathParams;
    public ServiceAddTargetRequest withPathParams(ServiceAddTargetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Target request;
    public ServiceAddTargetRequest withRequest(openapisdk.models.shared.Target request) {
        this.request = request;
        return this;
    }
    public ServiceAddTargetSecurity security;
    public ServiceAddTargetRequest withSecurity(ServiceAddTargetSecurity security) {
        this.security = security;
        return this;
    }
}