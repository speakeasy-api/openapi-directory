package openapisdk.models.operations;



public class CloudschedulerProjectsLocationsJobsGetResponse {
    public String contentType;
    public CloudschedulerProjectsLocationsJobsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public CloudschedulerProjectsLocationsJobsGetResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public CloudschedulerProjectsLocationsJobsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}