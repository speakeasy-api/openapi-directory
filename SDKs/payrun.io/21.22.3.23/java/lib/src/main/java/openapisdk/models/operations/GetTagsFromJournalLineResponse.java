package openapisdk.models.operations;



public class GetTagsFromJournalLineResponse {
    public String contentType;
    public GetTagsFromJournalLineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetTagsFromJournalLineResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetTagsFromJournalLineResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetTagsFromJournalLineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}