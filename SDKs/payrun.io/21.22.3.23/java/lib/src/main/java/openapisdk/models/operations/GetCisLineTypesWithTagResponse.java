package openapisdk.models.operations;



public class GetCisLineTypesWithTagResponse {
    public String contentType;
    public GetCisLineTypesWithTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetCisLineTypesWithTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetCisLineTypesWithTagResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetCisLineTypesWithTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}