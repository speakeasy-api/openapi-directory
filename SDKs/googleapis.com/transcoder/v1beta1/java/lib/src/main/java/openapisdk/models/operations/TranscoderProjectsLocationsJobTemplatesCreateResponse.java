package openapisdk.models.operations;



public class TranscoderProjectsLocationsJobTemplatesCreateResponse {
    public String contentType;
    public TranscoderProjectsLocationsJobTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.JobTemplate jobTemplate;
    public TranscoderProjectsLocationsJobTemplatesCreateResponse withJobTemplate(openapisdk.models.shared.JobTemplate jobTemplate) {
        this.jobTemplate = jobTemplate;
        return this;
    }
    public Long statusCode;
    public TranscoderProjectsLocationsJobTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}