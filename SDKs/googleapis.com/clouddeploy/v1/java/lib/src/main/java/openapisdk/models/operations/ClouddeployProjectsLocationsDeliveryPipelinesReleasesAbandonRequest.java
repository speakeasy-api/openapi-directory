package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest {
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonPathParams pathParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest withPathParams(ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonQueryParams queryParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest withQueryParams(ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonSecurity security;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest withSecurity(ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonSecurity security) {
        this.security = security;
        return this;
    }
}