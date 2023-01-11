package openapisdk.models.operations;



public class MonitoringProjectsTimeSeriesListResponse {
    public String contentType;
    public MonitoringProjectsTimeSeriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTimeSeriesResponse listTimeSeriesResponse;
    public MonitoringProjectsTimeSeriesListResponse withListTimeSeriesResponse(openapisdk.models.shared.ListTimeSeriesResponse listTimeSeriesResponse) {
        this.listTimeSeriesResponse = listTimeSeriesResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsTimeSeriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}