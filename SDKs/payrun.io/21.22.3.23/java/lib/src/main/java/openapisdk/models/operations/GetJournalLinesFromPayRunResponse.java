package openapisdk.models.operations;



public class GetJournalLinesFromPayRunResponse {
    public String contentType;
    public GetJournalLinesFromPayRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetJournalLinesFromPayRunResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetJournalLinesFromPayRunResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetJournalLinesFromPayRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}