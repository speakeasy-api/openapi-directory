package openapisdk.models.operations;



public class UpdateUnderstandModelBuildResponse {
    public String contentType;
    public UpdateUnderstandModelBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUnderstandModelBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantModelBuild previewUnderstandAssistantModelBuild;
    public UpdateUnderstandModelBuildResponse withPreviewUnderstandAssistantModelBuild(openapisdk.models.shared.PreviewUnderstandAssistantModelBuild previewUnderstandAssistantModelBuild) {
        this.previewUnderstandAssistantModelBuild = previewUnderstandAssistantModelBuild;
        return this;
    }
}