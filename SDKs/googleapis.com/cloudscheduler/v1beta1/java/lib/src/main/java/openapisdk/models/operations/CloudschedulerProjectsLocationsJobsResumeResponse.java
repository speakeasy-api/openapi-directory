package openapisdk.models.operations;



public class CloudschedulerProjectsLocationsJobsResumeResponse {
    public String contentType;
    public CloudschedulerProjectsLocationsJobsResumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public CloudschedulerProjectsLocationsJobsResumeResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public CloudschedulerProjectsLocationsJobsResumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}