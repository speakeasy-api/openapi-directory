package openapisdk.models.operations;



public class TranscoderProjectsLocationsJobsCreateResponse {
    public String contentType;
    public TranscoderProjectsLocationsJobsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public TranscoderProjectsLocationsJobsCreateResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public TranscoderProjectsLocationsJobsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}