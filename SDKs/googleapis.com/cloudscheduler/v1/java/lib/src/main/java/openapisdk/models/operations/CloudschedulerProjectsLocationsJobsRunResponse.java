package openapisdk.models.operations;



public class CloudschedulerProjectsLocationsJobsRunResponse {
    public String contentType;
    public CloudschedulerProjectsLocationsJobsRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public CloudschedulerProjectsLocationsJobsRunResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public CloudschedulerProjectsLocationsJobsRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}