package openapisdk.models.operations;



public class PutJournalInstructionTemplateResponse {
    public String contentType;
    public PutJournalInstructionTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutJournalInstructionTemplateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.JournalInstruction journalInstruction;
    public PutJournalInstructionTemplateResponse withJournalInstruction(openapisdk.models.shared.JournalInstruction journalInstruction) {
        this.journalInstruction = journalInstruction;
        return this;
    }
    public Long statusCode;
    public PutJournalInstructionTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}