package openapisdk.models.operations;



public class GetCisLinesFromSubContractorResponse {
    public String contentType;
    public GetCisLinesFromSubContractorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetCisLinesFromSubContractorResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetCisLinesFromSubContractorResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetCisLinesFromSubContractorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}