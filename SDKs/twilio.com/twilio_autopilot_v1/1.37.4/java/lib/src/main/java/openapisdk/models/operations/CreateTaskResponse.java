package openapisdk.models.operations;



public class CreateTaskResponse {
    public String contentType;
    public CreateTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTask autopilotV1AssistantTask;
    public CreateTaskResponse withAutopilotV1AssistantTask(openapisdk.models.shared.AutopilotV1AssistantTask autopilotV1AssistantTask) {
        this.autopilotV1AssistantTask = autopilotV1AssistantTask;
        return this;
    }
}