package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest {
    public ClouddeployProjectsLocationsDeliveryPipelinesCreatePathParams pathParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest withPathParams(ClouddeployProjectsLocationsDeliveryPipelinesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams queryParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest withQueryParams(ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeliveryPipelineInput request;
    public ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest withRequest(openapisdk.models.shared.DeliveryPipelineInput request) {
        this.request = request;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity security;
    public ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest withSecurity(ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity security) {
        this.security = security;
        return this;
    }
}