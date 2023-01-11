package openapisdk.models.operations;



public class FetchTaskActionsResponse {
    public String contentType;
    public FetchTaskActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTaskActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTaskTaskActions autopilotV1AssistantTaskTaskActions;
    public FetchTaskActionsResponse withAutopilotV1AssistantTaskTaskActions(openapisdk.models.shared.AutopilotV1AssistantTaskTaskActions autopilotV1AssistantTaskTaskActions) {
        this.autopilotV1AssistantTaskTaskActions = autopilotV1AssistantTaskTaskActions;
        return this;
    }
}