package openapisdk.models.operations;



public class PutReportDefinitionResponse {
    public String contentType;
    public PutReportDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutReportDefinitionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.ReportDefinition reportDefinition;
    public PutReportDefinitionResponse withReportDefinition(openapisdk.models.shared.ReportDefinition reportDefinition) {
        this.reportDefinition = reportDefinition;
        return this;
    }
    public Long statusCode;
    public PutReportDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}