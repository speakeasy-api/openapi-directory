package openapisdk.models.operations;



public class CreateUnderstandSampleResponse {
    public String contentType;
    public CreateUnderstandSampleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUnderstandSampleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTaskSample previewUnderstandAssistantTaskSample;
    public CreateUnderstandSampleResponse withPreviewUnderstandAssistantTaskSample(openapisdk.models.shared.PreviewUnderstandAssistantTaskSample previewUnderstandAssistantTaskSample) {
        this.previewUnderstandAssistantTaskSample = previewUnderstandAssistantTaskSample;
        return this;
    }
}