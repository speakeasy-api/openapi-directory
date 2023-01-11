package openapisdk.models.operations;



public class GetUsersIdResponse {
    public String contentType;
    public GetUsersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public GetUsersIdResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
    public GetUsersId401ApplicationJson getUsersId401ApplicationJSONObject;
    public GetUsersIdResponse withGetUsersId401ApplicationJsonObject(GetUsersId401ApplicationJson getUsersId401ApplicationJSONObject) {
        this.getUsersId401ApplicationJSONObject = getUsersId401ApplicationJSONObject;
        return this;
    }
    public GetUsersId404ApplicationJson getUsersId404ApplicationJSONObject;
    public GetUsersIdResponse withGetUsersId404ApplicationJsonObject(GetUsersId404ApplicationJson getUsersId404ApplicationJSONObject) {
        this.getUsersId404ApplicationJSONObject = getUsersId404ApplicationJSONObject;
        return this;
    }
}