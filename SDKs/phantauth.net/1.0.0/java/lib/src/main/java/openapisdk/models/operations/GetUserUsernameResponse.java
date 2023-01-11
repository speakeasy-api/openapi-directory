package openapisdk.models.operations;



public class GetUserUsernameResponse {
    public String contentType;
    public GetUserUsernameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserUsernameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUserUsername200ApplicationJson getUserUsername200ApplicationJSONObject;
    public GetUserUsernameResponse withGetUserUsername200ApplicationJsonObject(GetUserUsername200ApplicationJson getUserUsername200ApplicationJSONObject) {
        this.getUserUsername200ApplicationJSONObject = getUserUsername200ApplicationJSONObject;
        return this;
    }
}