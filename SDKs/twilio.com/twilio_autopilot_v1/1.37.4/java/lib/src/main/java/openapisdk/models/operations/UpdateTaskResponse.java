package openapisdk.models.operations;



public class UpdateTaskResponse {
    public String contentType;
    public UpdateTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTask autopilotV1AssistantTask;
    public UpdateTaskResponse withAutopilotV1AssistantTask(openapisdk.models.shared.AutopilotV1AssistantTask autopilotV1AssistantTask) {
        this.autopilotV1AssistantTask = autopilotV1AssistantTask;
        return this;
    }
}