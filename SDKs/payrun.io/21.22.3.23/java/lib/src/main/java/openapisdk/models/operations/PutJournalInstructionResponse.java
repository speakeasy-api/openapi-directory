package openapisdk.models.operations;



public class PutJournalInstructionResponse {
    public String contentType;
    public PutJournalInstructionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutJournalInstructionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.JournalInstruction journalInstruction;
    public PutJournalInstructionResponse withJournalInstruction(openapisdk.models.shared.JournalInstruction journalInstruction) {
        this.journalInstruction = journalInstruction;
        return this;
    }
    public Long statusCode;
    public PutJournalInstructionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}