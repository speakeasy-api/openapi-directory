package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest {
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprovePathParams pathParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest withPathParams(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveQueryParams queryParams;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest withQueryParams(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApproveRolloutRequest request;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest withRequest(openapisdk.models.shared.ApproveRolloutRequest request) {
        this.request = request;
        return this;
    }
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveSecurity security;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest withSecurity(ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveSecurity security) {
        this.security = security;
        return this;
    }
}