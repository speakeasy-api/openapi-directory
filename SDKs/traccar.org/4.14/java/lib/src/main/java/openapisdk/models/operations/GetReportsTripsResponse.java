package openapisdk.models.operations;



public class GetReportsTripsResponse {
    public byte[] body;
    public GetReportsTripsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetReportsTripsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportTrips[] reportTrips;
    public GetReportsTripsResponse withReportTrips(openapisdk.models.shared.ReportTrips[] reportTrips) {
        this.reportTrips = reportTrips;
        return this;
    }
    public Long statusCode;
    public GetReportsTripsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}