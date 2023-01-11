package openapisdk.models.operations;



public class GetAeAssessmentsFromEmployeeResponse {
    public String contentType;
    public GetAeAssessmentsFromEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetAeAssessmentsFromEmployeeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetAeAssessmentsFromEmployeeResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetAeAssessmentsFromEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}