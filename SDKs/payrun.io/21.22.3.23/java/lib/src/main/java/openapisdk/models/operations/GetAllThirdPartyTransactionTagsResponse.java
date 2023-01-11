package openapisdk.models.operations;



public class GetAllThirdPartyTransactionTagsResponse {
    public String contentType;
    public GetAllThirdPartyTransactionTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetAllThirdPartyTransactionTagsResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetAllThirdPartyTransactionTagsResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetAllThirdPartyTransactionTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}