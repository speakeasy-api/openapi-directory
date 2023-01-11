package openapisdk.models.operations;



public class UpdateTaskActionsResponse {
    public String contentType;
    public UpdateTaskActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTaskActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTaskTaskActions autopilotV1AssistantTaskTaskActions;
    public UpdateTaskActionsResponse withAutopilotV1AssistantTaskTaskActions(openapisdk.models.shared.AutopilotV1AssistantTaskTaskActions autopilotV1AssistantTaskTaskActions) {
        this.autopilotV1AssistantTaskTaskActions = autopilotV1AssistantTaskTaskActions;
        return this;
    }
}