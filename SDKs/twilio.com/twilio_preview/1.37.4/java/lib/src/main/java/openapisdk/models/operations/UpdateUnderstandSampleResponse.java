package openapisdk.models.operations;



public class UpdateUnderstandSampleResponse {
    public String contentType;
    public UpdateUnderstandSampleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUnderstandSampleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTaskSample previewUnderstandAssistantTaskSample;
    public UpdateUnderstandSampleResponse withPreviewUnderstandAssistantTaskSample(openapisdk.models.shared.PreviewUnderstandAssistantTaskSample previewUnderstandAssistantTaskSample) {
        this.previewUnderstandAssistantTaskSample = previewUnderstandAssistantTaskSample;
        return this;
    }
}