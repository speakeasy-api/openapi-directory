package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest {
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams pathParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest withPathParams(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams queryParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest withQueryParams(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RolloutInput request;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest withRequest(openapisdk.models.shared.RolloutInput request) {
        this.request = request;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity security;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest withSecurity(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity security) {
        this.security = security;
        return this;
    }
}