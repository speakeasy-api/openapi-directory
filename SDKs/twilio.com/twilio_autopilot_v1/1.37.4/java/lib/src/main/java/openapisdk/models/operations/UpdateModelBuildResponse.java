package openapisdk.models.operations;



public class UpdateModelBuildResponse {
    public String contentType;
    public UpdateModelBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateModelBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantModelBuild autopilotV1AssistantModelBuild;
    public UpdateModelBuildResponse withAutopilotV1AssistantModelBuild(openapisdk.models.shared.AutopilotV1AssistantModelBuild autopilotV1AssistantModelBuild) {
        this.autopilotV1AssistantModelBuild = autopilotV1AssistantModelBuild;
        return this;
    }
}