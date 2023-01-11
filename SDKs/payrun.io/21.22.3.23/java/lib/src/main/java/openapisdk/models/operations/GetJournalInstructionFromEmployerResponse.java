package openapisdk.models.operations;



public class GetJournalInstructionFromEmployerResponse {
    public String contentType;
    public GetJournalInstructionFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetJournalInstructionFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.JournalInstruction journalInstruction;
    public GetJournalInstructionFromEmployerResponse withJournalInstruction(openapisdk.models.shared.JournalInstruction journalInstruction) {
        this.journalInstruction = journalInstruction;
        return this;
    }
    public Long statusCode;
    public GetJournalInstructionFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}