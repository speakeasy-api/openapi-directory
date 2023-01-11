package openapisdk.models.operations;



public class UpdateStyleSheetResponse {
    public String contentType;
    public UpdateStyleSheetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateStyleSheetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantStyleSheet autopilotV1AssistantStyleSheet;
    public UpdateStyleSheetResponse withAutopilotV1AssistantStyleSheet(openapisdk.models.shared.AutopilotV1AssistantStyleSheet autopilotV1AssistantStyleSheet) {
        this.autopilotV1AssistantStyleSheet = autopilotV1AssistantStyleSheet;
        return this;
    }
}