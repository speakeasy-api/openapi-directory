package openapisdk.models.operations;



public class GetPensionRevisionsResponse {
    public String contentType;
    public GetPensionRevisionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPensionRevisionsResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetPensionRevisionsResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetPensionRevisionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}