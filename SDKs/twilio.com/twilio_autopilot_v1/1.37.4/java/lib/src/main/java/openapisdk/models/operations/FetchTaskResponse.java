package openapisdk.models.operations;



public class FetchTaskResponse {
    public String contentType;
    public FetchTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTask autopilotV1AssistantTask;
    public FetchTaskResponse withAutopilotV1AssistantTask(openapisdk.models.shared.AutopilotV1AssistantTask autopilotV1AssistantTask) {
        this.autopilotV1AssistantTask = autopilotV1AssistantTask;
        return this;
    }
}