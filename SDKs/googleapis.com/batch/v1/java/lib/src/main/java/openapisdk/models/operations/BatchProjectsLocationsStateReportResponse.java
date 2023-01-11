package openapisdk.models.operations;



public class BatchProjectsLocationsStateReportResponse {
    public String contentType;
    public BatchProjectsLocationsStateReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportAgentStateResponse reportAgentStateResponse;
    public BatchProjectsLocationsStateReportResponse withReportAgentStateResponse(openapisdk.models.shared.ReportAgentStateResponse reportAgentStateResponse) {
        this.reportAgentStateResponse = reportAgentStateResponse;
        return this;
    }
    public Long statusCode;
    public BatchProjectsLocationsStateReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}