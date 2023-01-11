package openapisdk.models.operations;



public class GetAllThirdPartyTransactionsWithTagResponse {
    public String contentType;
    public GetAllThirdPartyTransactionsWithTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetAllThirdPartyTransactionsWithTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetAllThirdPartyTransactionsWithTagResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetAllThirdPartyTransactionsWithTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}