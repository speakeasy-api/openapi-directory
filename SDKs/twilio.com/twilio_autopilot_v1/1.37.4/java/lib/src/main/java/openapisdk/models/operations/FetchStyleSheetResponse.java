package openapisdk.models.operations;



public class FetchStyleSheetResponse {
    public String contentType;
    public FetchStyleSheetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchStyleSheetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantStyleSheet autopilotV1AssistantStyleSheet;
    public FetchStyleSheetResponse withAutopilotV1AssistantStyleSheet(openapisdk.models.shared.AutopilotV1AssistantStyleSheet autopilotV1AssistantStyleSheet) {
        this.autopilotV1AssistantStyleSheet = autopilotV1AssistantStyleSheet;
        return this;
    }
}