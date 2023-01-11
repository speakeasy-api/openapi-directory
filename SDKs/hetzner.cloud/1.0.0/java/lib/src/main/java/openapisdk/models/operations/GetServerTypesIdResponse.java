package openapisdk.models.operations;



public class GetServerTypesIdResponse {
    public String contentType;
    public GetServerTypesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetServerTypesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetServerTypesId200ApplicationJson getServerTypesId200ApplicationJSONObject;
    public GetServerTypesIdResponse withGetServerTypesId200ApplicationJsonObject(GetServerTypesId200ApplicationJson getServerTypesId200ApplicationJSONObject) {
        this.getServerTypesId200ApplicationJSONObject = getServerTypesId200ApplicationJSONObject;
        return this;
    }
}