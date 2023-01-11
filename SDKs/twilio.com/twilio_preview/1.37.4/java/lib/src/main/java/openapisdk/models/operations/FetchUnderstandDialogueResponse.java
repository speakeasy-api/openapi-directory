package openapisdk.models.operations;



public class FetchUnderstandDialogueResponse {
    public String contentType;
    public FetchUnderstandDialogueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandDialogueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantDialogue previewUnderstandAssistantDialogue;
    public FetchUnderstandDialogueResponse withPreviewUnderstandAssistantDialogue(openapisdk.models.shared.PreviewUnderstandAssistantDialogue previewUnderstandAssistantDialogue) {
        this.previewUnderstandAssistantDialogue = previewUnderstandAssistantDialogue;
        return this;
    }
}