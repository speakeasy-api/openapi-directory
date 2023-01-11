package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest {
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreatePathParams pathParams;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest withPathParams(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams queryParams;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest withQueryParams(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudServicebrokerV1beta1Binding request;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudServicebrokerV1beta1Binding request) {
        this.request = request;
        return this;
    }
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity security;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest withSecurity(ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity security) {
        this.security = security;
        return this;
    }
}