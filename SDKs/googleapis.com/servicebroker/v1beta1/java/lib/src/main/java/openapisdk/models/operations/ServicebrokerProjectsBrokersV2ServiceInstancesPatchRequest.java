package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest {
    public ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams pathParams;
    public ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest withPathParams(ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams queryParams;
    public ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest withQueryParams(ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudServicebrokerV1beta1ServiceInstance request;
    public ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest withRequest(openapisdk.models.shared.GoogleCloudServicebrokerV1beta1ServiceInstance request) {
        this.request = request;
        return this;
    }
    public ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity security;
    public ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest withSecurity(ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity security) {
        this.security = security;
        return this;
    }
}