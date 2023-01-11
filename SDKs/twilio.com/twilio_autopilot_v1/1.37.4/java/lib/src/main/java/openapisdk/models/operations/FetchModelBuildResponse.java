package openapisdk.models.operations;



public class FetchModelBuildResponse {
    public String contentType;
    public FetchModelBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchModelBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantModelBuild autopilotV1AssistantModelBuild;
    public FetchModelBuildResponse withAutopilotV1AssistantModelBuild(openapisdk.models.shared.AutopilotV1AssistantModelBuild autopilotV1AssistantModelBuild) {
        this.autopilotV1AssistantModelBuild = autopilotV1AssistantModelBuild;
        return this;
    }
}