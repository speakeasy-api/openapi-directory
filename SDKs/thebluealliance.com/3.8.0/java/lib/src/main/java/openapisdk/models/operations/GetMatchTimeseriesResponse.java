package openapisdk.models.operations;



public class GetMatchTimeseriesResponse {
    public String contentType;
    public GetMatchTimeseriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMatchTimeseriesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetMatchTimeseriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object>[] getMatchTimeseries200ApplicationJSONObjects;
    public GetMatchTimeseriesResponse withGetMatchTimeseries200ApplicationJsonObjects(java.util.Map<String, Object>[] getMatchTimeseries200ApplicationJSONObjects) {
        this.getMatchTimeseries200ApplicationJSONObjects = getMatchTimeseries200ApplicationJSONObjects;
        return this;
    }
}