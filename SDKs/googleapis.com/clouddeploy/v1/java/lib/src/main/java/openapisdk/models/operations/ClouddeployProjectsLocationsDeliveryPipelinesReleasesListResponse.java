package openapisdk.models.operations;



public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse {
    public String contentType;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReleasesResponse listReleasesResponse;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse withListReleasesResponse(openapisdk.models.shared.ListReleasesResponse listReleasesResponse) {
        this.listReleasesResponse = listReleasesResponse;
        return this;
    }
    public Long statusCode;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}