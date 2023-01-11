package openapisdk.models.operations;



public class CloudschedulerProjectsLocationsJobsPauseResponse {
    public String contentType;
    public CloudschedulerProjectsLocationsJobsPauseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public CloudschedulerProjectsLocationsJobsPauseResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public CloudschedulerProjectsLocationsJobsPauseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}