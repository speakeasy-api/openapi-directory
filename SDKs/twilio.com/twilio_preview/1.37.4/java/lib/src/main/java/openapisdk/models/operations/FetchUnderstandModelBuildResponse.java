package openapisdk.models.operations;



public class FetchUnderstandModelBuildResponse {
    public String contentType;
    public FetchUnderstandModelBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandModelBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantModelBuild previewUnderstandAssistantModelBuild;
    public FetchUnderstandModelBuildResponse withPreviewUnderstandAssistantModelBuild(openapisdk.models.shared.PreviewUnderstandAssistantModelBuild previewUnderstandAssistantModelBuild) {
        this.previewUnderstandAssistantModelBuild = previewUnderstandAssistantModelBuild;
        return this;
    }
}