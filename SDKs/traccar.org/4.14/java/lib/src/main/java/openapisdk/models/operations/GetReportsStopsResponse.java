package openapisdk.models.operations;



public class GetReportsStopsResponse {
    public byte[] body;
    public GetReportsStopsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetReportsStopsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportStops[] reportStops;
    public GetReportsStopsResponse withReportStops(openapisdk.models.shared.ReportStops[] reportStops) {
        this.reportStops = reportStops;
        return this;
    }
    public Long statusCode;
    public GetReportsStopsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}