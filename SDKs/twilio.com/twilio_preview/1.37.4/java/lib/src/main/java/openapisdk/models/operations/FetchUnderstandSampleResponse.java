package openapisdk.models.operations;



public class FetchUnderstandSampleResponse {
    public String contentType;
    public FetchUnderstandSampleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandSampleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTaskSample previewUnderstandAssistantTaskSample;
    public FetchUnderstandSampleResponse withPreviewUnderstandAssistantTaskSample(openapisdk.models.shared.PreviewUnderstandAssistantTaskSample previewUnderstandAssistantTaskSample) {
        this.previewUnderstandAssistantTaskSample = previewUnderstandAssistantTaskSample;
        return this;
    }
}