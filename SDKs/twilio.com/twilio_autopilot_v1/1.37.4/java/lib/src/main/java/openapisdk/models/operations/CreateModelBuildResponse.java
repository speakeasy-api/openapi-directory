package openapisdk.models.operations;



public class CreateModelBuildResponse {
    public String contentType;
    public CreateModelBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateModelBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantModelBuild autopilotV1AssistantModelBuild;
    public CreateModelBuildResponse withAutopilotV1AssistantModelBuild(openapisdk.models.shared.AutopilotV1AssistantModelBuild autopilotV1AssistantModelBuild) {
        this.autopilotV1AssistantModelBuild = autopilotV1AssistantModelBuild;
        return this;
    }
}