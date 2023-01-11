package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest {
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams pathParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest withPathParams(ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams queryParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest withQueryParams(ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReleaseInput request;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest withRequest(openapisdk.models.shared.ReleaseInput request) {
        this.request = request;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity security;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest withSecurity(ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity security) {
        this.security = security;
        return this;
    }
}