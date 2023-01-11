package openapisdk.models.operations;



public class RunProjectsLocationsServicesRevisionsGetResponse {
    public String contentType;
    public RunProjectsLocationsServicesRevisionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRunV2Revision googleCloudRunV2Revision;
    public RunProjectsLocationsServicesRevisionsGetResponse withGoogleCloudRunV2Revision(openapisdk.models.shared.GoogleCloudRunV2Revision googleCloudRunV2Revision) {
        this.googleCloudRunV2Revision = googleCloudRunV2Revision;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesRevisionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}