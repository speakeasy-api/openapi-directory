package openapisdk.models.operations;



public class DoubleclickbidmanagerQueriesRunResponse {
    public String contentType;
    public DoubleclickbidmanagerQueriesRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public DoubleclickbidmanagerQueriesRunResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public DoubleclickbidmanagerQueriesRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}