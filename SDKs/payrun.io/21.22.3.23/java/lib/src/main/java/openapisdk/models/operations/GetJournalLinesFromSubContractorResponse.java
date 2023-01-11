package openapisdk.models.operations;



public class GetJournalLinesFromSubContractorResponse {
    public String contentType;
    public GetJournalLinesFromSubContractorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetJournalLinesFromSubContractorResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetJournalLinesFromSubContractorResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetJournalLinesFromSubContractorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}