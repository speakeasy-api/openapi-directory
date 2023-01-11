package openapisdk.models.operations;



public class GetRoleResponse {
    public String contentType;
    public GetRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetRole200ApplicationJson getRole200ApplicationJSONObject;
    public GetRoleResponse withGetRole200ApplicationJsonObject(GetRole200ApplicationJson getRole200ApplicationJSONObject) {
        this.getRole200ApplicationJSONObject = getRole200ApplicationJSONObject;
        return this;
    }
}