package openapisdk.models.operations;



public class PostJournalInstructionRequest {
    public PostJournalInstructionPathParams pathParams;
    public PostJournalInstructionRequest withPathParams(PostJournalInstructionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostJournalInstructionHeaders headers;
    public PostJournalInstructionRequest withHeaders(PostJournalInstructionHeaders headers) {
        this.headers = headers;
        return this;
    }
}