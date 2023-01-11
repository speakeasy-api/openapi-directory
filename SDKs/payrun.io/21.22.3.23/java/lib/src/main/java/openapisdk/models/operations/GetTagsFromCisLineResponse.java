package openapisdk.models.operations;



public class GetTagsFromCisLineResponse {
    public String contentType;
    public GetTagsFromCisLineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetTagsFromCisLineResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetTagsFromCisLineResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetTagsFromCisLineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}