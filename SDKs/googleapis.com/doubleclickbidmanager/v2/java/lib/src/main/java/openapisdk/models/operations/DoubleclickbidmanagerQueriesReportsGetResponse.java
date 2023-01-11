package openapisdk.models.operations;



public class DoubleclickbidmanagerQueriesReportsGetResponse {
    public String contentType;
    public DoubleclickbidmanagerQueriesReportsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public DoubleclickbidmanagerQueriesReportsGetResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public DoubleclickbidmanagerQueriesReportsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}