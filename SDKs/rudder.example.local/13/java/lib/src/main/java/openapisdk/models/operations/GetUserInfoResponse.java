package openapisdk.models.operations;



public class GetUserInfoResponse {
    public String contentType;
    public GetUserInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUserInfo200ApplicationJson getUserInfo200ApplicationJSONObject;
    public GetUserInfoResponse withGetUserInfo200ApplicationJsonObject(GetUserInfo200ApplicationJson getUserInfo200ApplicationJSONObject) {
        this.getUserInfo200ApplicationJSONObject = getUserInfo200ApplicationJSONObject;
        return this;
    }
}