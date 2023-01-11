package openapisdk.models.operations;



public class GetReportDefinitionFromApplicationResponse {
    public String contentType;
    public GetReportDefinitionFromApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetReportDefinitionFromApplicationResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.ReportDefinition reportDefinition;
    public GetReportDefinitionFromApplicationResponse withReportDefinition(openapisdk.models.shared.ReportDefinition reportDefinition) {
        this.reportDefinition = reportDefinition;
        return this;
    }
    public Long statusCode;
    public GetReportDefinitionFromApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}