package openapisdk.models.operations;



public class CloudschedulerProjectsLocationsJobsCreateResponse {
    public String contentType;
    public CloudschedulerProjectsLocationsJobsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public CloudschedulerProjectsLocationsJobsCreateResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public CloudschedulerProjectsLocationsJobsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}