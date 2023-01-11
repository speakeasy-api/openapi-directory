package openapisdk.models.operations;



public class GetReportLinesFromPayRunResponse {
    public String contentType;
    public GetReportLinesFromPayRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetReportLinesFromPayRunResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetReportLinesFromPayRunResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetReportLinesFromPayRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}