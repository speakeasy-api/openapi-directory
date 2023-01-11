package openapisdk.models.operations;



public class CreateUnderstandModelBuildResponse {
    public String contentType;
    public CreateUnderstandModelBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUnderstandModelBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantModelBuild previewUnderstandAssistantModelBuild;
    public CreateUnderstandModelBuildResponse withPreviewUnderstandAssistantModelBuild(openapisdk.models.shared.PreviewUnderstandAssistantModelBuild previewUnderstandAssistantModelBuild) {
        this.previewUnderstandAssistantModelBuild = previewUnderstandAssistantModelBuild;
        return this;
    }
}