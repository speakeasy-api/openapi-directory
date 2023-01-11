package openapisdk.models.operations;



public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListResponse {
    public String contentType;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListJobRunsResponse listJobRunsResponse;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListResponse withListJobRunsResponse(openapisdk.models.shared.ListJobRunsResponse listJobRunsResponse) {
        this.listJobRunsResponse = listJobRunsResponse;
        return this;
    }
    public Long statusCode;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}