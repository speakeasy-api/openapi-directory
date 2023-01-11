package openapisdk.models.operations;



public class GetSubContractorsWithTagResponse {
    public String contentType;
    public GetSubContractorsWithTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetSubContractorsWithTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetSubContractorsWithTagResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetSubContractorsWithTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}