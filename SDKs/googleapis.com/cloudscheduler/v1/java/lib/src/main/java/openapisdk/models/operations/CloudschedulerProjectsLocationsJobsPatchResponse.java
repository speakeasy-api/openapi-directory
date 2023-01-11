package openapisdk.models.operations;



public class CloudschedulerProjectsLocationsJobsPatchResponse {
    public String contentType;
    public CloudschedulerProjectsLocationsJobsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public CloudschedulerProjectsLocationsJobsPatchResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public CloudschedulerProjectsLocationsJobsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}