package openapisdk.models.operations;



public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListResponse {
    public String contentType;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRolloutsResponse listRolloutsResponse;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListResponse withListRolloutsResponse(openapisdk.models.shared.ListRolloutsResponse listRolloutsResponse) {
        this.listRolloutsResponse = listRolloutsResponse;
        return this;
    }
    public Long statusCode;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}