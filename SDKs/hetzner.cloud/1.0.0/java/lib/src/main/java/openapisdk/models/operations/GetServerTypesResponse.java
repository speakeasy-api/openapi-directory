package openapisdk.models.operations;



public class GetServerTypesResponse {
    public String contentType;
    public GetServerTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetServerTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetServerTypes200ApplicationJson getServerTypes200ApplicationJSONObject;
    public GetServerTypesResponse withGetServerTypes200ApplicationJsonObject(GetServerTypes200ApplicationJson getServerTypes200ApplicationJSONObject) {
        this.getServerTypes200ApplicationJSONObject = getServerTypes200ApplicationJSONObject;
        return this;
    }
}