package openapisdk.models.operations;



public class GetweatherResponse {
    public String contentType;
    public GetweatherResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetweatherResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Getweather200ApplicationJson getweather200ApplicationJSONObject;
    public GetweatherResponse withGetweather200ApplicationJsonObject(Getweather200ApplicationJson getweather200ApplicationJSONObject) {
        this.getweather200ApplicationJSONObject = getweather200ApplicationJSONObject;
        return this;
    }
}