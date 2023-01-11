package openapisdk.models.operations;



public class MonitoringProjectsCollectdTimeSeriesCreateResponse {
    public String contentType;
    public MonitoringProjectsCollectdTimeSeriesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCollectdTimeSeriesResponse createCollectdTimeSeriesResponse;
    public MonitoringProjectsCollectdTimeSeriesCreateResponse withCreateCollectdTimeSeriesResponse(openapisdk.models.shared.CreateCollectdTimeSeriesResponse createCollectdTimeSeriesResponse) {
        this.createCollectdTimeSeriesResponse = createCollectdTimeSeriesResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsCollectdTimeSeriesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}