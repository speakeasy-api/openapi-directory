package openapisdk.models.operations;



public class TranscoderProjectsLocationsJobTemplatesGetResponse {
    public String contentType;
    public TranscoderProjectsLocationsJobTemplatesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.JobTemplate jobTemplate;
    public TranscoderProjectsLocationsJobTemplatesGetResponse withJobTemplate(openapisdk.models.shared.JobTemplate jobTemplate) {
        this.jobTemplate = jobTemplate;
        return this;
    }
    public Long statusCode;
    public TranscoderProjectsLocationsJobTemplatesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}