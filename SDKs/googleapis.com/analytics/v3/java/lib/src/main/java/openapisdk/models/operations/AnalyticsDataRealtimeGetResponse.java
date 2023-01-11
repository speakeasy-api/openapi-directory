package openapisdk.models.operations;



public class AnalyticsDataRealtimeGetResponse {
    public String contentType;
    public AnalyticsDataRealtimeGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RealtimeData realtimeData;
    public AnalyticsDataRealtimeGetResponse withRealtimeData(openapisdk.models.shared.RealtimeData realtimeData) {
        this.realtimeData = realtimeData;
        return this;
    }
    public Long statusCode;
    public AnalyticsDataRealtimeGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}