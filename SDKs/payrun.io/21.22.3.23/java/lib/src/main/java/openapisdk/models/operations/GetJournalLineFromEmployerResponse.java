package openapisdk.models.operations;



public class GetJournalLineFromEmployerResponse {
    public String contentType;
    public GetJournalLineFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetJournalLineFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.JournalLine journalLine;
    public GetJournalLineFromEmployerResponse withJournalLine(openapisdk.models.shared.JournalLine journalLine) {
        this.journalLine = journalLine;
        return this;
    }
    public Long statusCode;
    public GetJournalLineFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}