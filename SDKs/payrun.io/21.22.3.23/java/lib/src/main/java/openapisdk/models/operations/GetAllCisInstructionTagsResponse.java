package openapisdk.models.operations;



public class GetAllCisInstructionTagsResponse {
    public String contentType;
    public GetAllCisInstructionTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetAllCisInstructionTagsResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetAllCisInstructionTagsResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetAllCisInstructionTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}