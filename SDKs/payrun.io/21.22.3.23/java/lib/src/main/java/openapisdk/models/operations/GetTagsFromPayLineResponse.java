package openapisdk.models.operations;



public class GetTagsFromPayLineResponse {
    public String contentType;
    public GetTagsFromPayLineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetTagsFromPayLineResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetTagsFromPayLineResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetTagsFromPayLineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}