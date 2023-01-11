package openapisdk.models.operations;



public class FetchDialogueResponse {
    public String contentType;
    public FetchDialogueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDialogueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantDialogue autopilotV1AssistantDialogue;
    public FetchDialogueResponse withAutopilotV1AssistantDialogue(openapisdk.models.shared.AutopilotV1AssistantDialogue autopilotV1AssistantDialogue) {
        this.autopilotV1AssistantDialogue = autopilotV1AssistantDialogue;
        return this;
    }
}