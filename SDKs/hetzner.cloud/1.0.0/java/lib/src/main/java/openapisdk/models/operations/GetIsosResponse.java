package openapisdk.models.operations;



public class GetIsosResponse {
    public String contentType;
    public GetIsosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetIsosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetIsos200ApplicationJson getIsos200ApplicationJSONObject;
    public GetIsosResponse withGetIsos200ApplicationJsonObject(GetIsos200ApplicationJson getIsos200ApplicationJSONObject) {
        this.getIsos200ApplicationJSONObject = getIsos200ApplicationJSONObject;
        return this;
    }
}