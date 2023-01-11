package openapisdk.models.operations;



public class GetJournalInstructionTemplateResponse {
    public String contentType;
    public GetJournalInstructionTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetJournalInstructionTemplateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.JournalInstruction journalInstruction;
    public GetJournalInstructionTemplateResponse withJournalInstruction(openapisdk.models.shared.JournalInstruction journalInstruction) {
        this.journalInstruction = journalInstruction;
        return this;
    }
    public Long statusCode;
    public GetJournalInstructionTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}