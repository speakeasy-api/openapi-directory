package openapisdk.models.operations;



public class GetCveCheckConfigurationResponse {
    public String contentType;
    public GetCveCheckConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCveCheckConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCveCheckConfiguration200ApplicationJson getCVECheckConfiguration200ApplicationJSONObject;
    public GetCveCheckConfigurationResponse withGetCveCheckConfiguration200ApplicationJsonObject(GetCveCheckConfiguration200ApplicationJson getCVECheckConfiguration200ApplicationJSONObject) {
        this.getCVECheckConfiguration200ApplicationJSONObject = getCVECheckConfiguration200ApplicationJSONObject;
        return this;
    }
}