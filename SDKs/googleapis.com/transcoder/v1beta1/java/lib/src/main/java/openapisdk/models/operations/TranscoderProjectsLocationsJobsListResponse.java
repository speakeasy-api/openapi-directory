package openapisdk.models.operations;



public class TranscoderProjectsLocationsJobsListResponse {
    public String contentType;
    public TranscoderProjectsLocationsJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListJobsResponse listJobsResponse;
    public TranscoderProjectsLocationsJobsListResponse withListJobsResponse(openapisdk.models.shared.ListJobsResponse listJobsResponse) {
        this.listJobsResponse = listJobsResponse;
        return this;
    }
    public Long statusCode;
    public TranscoderProjectsLocationsJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}