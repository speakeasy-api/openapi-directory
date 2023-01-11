package openapisdk.models.operations;



public class GetReportingInstructionsFromEmployerResponse {
    public String contentType;
    public GetReportingInstructionsFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetReportingInstructionsFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetReportingInstructionsFromEmployerResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetReportingInstructionsFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}