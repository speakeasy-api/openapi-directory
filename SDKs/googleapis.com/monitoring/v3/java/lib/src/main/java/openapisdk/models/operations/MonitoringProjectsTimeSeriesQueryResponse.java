package openapisdk.models.operations;



public class MonitoringProjectsTimeSeriesQueryResponse {
    public String contentType;
    public MonitoringProjectsTimeSeriesQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueryTimeSeriesResponse queryTimeSeriesResponse;
    public MonitoringProjectsTimeSeriesQueryResponse withQueryTimeSeriesResponse(openapisdk.models.shared.QueryTimeSeriesResponse queryTimeSeriesResponse) {
        this.queryTimeSeriesResponse = queryTimeSeriesResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsTimeSeriesQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}