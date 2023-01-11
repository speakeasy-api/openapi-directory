package openapisdk.models.operations;



public class Adexchangebuyer2AccountsProposalsAddNoteResponse {
    public String contentType;
    public Adexchangebuyer2AccountsProposalsAddNoteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Note note;
    public Adexchangebuyer2AccountsProposalsAddNoteResponse withNote(openapisdk.models.shared.Note note) {
        this.note = note;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsProposalsAddNoteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}