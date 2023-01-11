package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest {
    public ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams pathParams;
    public ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest withPathParams(ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams queryParams;
    public ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest withQueryParams(ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudServicebrokerV1beta1ServiceInstance request;
    public ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest withRequest(openapisdk.models.shared.GoogleCloudServicebrokerV1beta1ServiceInstance request) {
        this.request = request;
        return this;
    }
    public ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity security;
    public ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest withSecurity(ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity security) {
        this.security = security;
        return this;
    }
}