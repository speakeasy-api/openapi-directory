package openapisdk.models.operations;



public class GetClientClientIdResponse {
    public String contentType;
    public GetClientClientIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetClientClientIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetClientClientId200ApplicationJson getClientClientId200ApplicationJSONObject;
    public GetClientClientIdResponse withGetClientClientId200ApplicationJsonObject(GetClientClientId200ApplicationJson getClientClientId200ApplicationJSONObject) {
        this.getClientClientId200ApplicationJSONObject = getClientClientId200ApplicationJSONObject;
        return this;
    }
}