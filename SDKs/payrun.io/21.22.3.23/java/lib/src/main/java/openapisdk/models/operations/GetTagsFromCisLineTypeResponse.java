package openapisdk.models.operations;



public class GetTagsFromCisLineTypeResponse {
    public String contentType;
    public GetTagsFromCisLineTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetTagsFromCisLineTypeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetTagsFromCisLineTypeResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetTagsFromCisLineTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}