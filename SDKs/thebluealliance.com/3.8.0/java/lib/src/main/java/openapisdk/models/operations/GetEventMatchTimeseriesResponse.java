package openapisdk.models.operations;



public class GetEventMatchTimeseriesResponse {
    public String contentType;
    public GetEventMatchTimeseriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventMatchTimeseriesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventMatchTimeseriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getEventMatchTimeseries200ApplicationJSONStrings;
    public GetEventMatchTimeseriesResponse withGetEventMatchTimeseries200ApplicationJsonStrings(String[] getEventMatchTimeseries200ApplicationJSONStrings) {
        this.getEventMatchTimeseries200ApplicationJSONStrings = getEventMatchTimeseries200ApplicationJSONStrings;
        return this;
    }
}