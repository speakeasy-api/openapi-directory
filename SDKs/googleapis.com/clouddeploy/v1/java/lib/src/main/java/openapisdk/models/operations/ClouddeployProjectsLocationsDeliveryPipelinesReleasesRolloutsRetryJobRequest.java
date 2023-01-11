package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest {
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobPathParams pathParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest withPathParams(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobQueryParams queryParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest withQueryParams(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RetryJobRequest request;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest withRequest(openapisdk.models.shared.RetryJobRequest request) {
        this.request = request;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobSecurity security;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest withSecurity(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobSecurity security) {
        this.security = security;
        return this;
    }
}