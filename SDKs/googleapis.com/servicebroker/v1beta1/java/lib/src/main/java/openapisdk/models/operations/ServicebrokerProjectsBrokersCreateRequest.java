package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersCreateRequest {
    public ServicebrokerProjectsBrokersCreatePathParams pathParams;
    public ServicebrokerProjectsBrokersCreateRequest withPathParams(ServicebrokerProjectsBrokersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicebrokerProjectsBrokersCreateQueryParams queryParams;
    public ServicebrokerProjectsBrokersCreateRequest withQueryParams(ServicebrokerProjectsBrokersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudServicebrokerV1beta1Broker request;
    public ServicebrokerProjectsBrokersCreateRequest withRequest(openapisdk.models.shared.GoogleCloudServicebrokerV1beta1Broker request) {
        this.request = request;
        return this;
    }
    public ServicebrokerProjectsBrokersCreateSecurity security;
    public ServicebrokerProjectsBrokersCreateRequest withSecurity(ServicebrokerProjectsBrokersCreateSecurity security) {
        this.security = security;
        return this;
    }
}