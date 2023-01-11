package openapisdk.models.operations;



public class GetAeAssessmentsFromPayRunResponse {
    public String contentType;
    public GetAeAssessmentsFromPayRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetAeAssessmentsFromPayRunResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetAeAssessmentsFromPayRunResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetAeAssessmentsFromPayRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}