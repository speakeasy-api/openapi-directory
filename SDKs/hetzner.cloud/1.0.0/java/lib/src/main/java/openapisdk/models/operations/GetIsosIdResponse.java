package openapisdk.models.operations;



public class GetIsosIdResponse {
    public String contentType;
    public GetIsosIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetIsosIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetIsosId200ApplicationJson getIsosId200ApplicationJSONObject;
    public GetIsosIdResponse withGetIsosId200ApplicationJsonObject(GetIsosId200ApplicationJson getIsosId200ApplicationJSONObject) {
        this.getIsosId200ApplicationJSONObject = getIsosId200ApplicationJSONObject;
        return this;
    }
}