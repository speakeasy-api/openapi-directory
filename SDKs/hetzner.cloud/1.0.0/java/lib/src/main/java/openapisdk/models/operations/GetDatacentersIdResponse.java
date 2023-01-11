package openapisdk.models.operations;



public class GetDatacentersIdResponse {
    public String contentType;
    public GetDatacentersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDatacentersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDatacentersId200ApplicationJson getDatacentersId200ApplicationJSONObject;
    public GetDatacentersIdResponse withGetDatacentersId200ApplicationJsonObject(GetDatacentersId200ApplicationJson getDatacentersId200ApplicationJSONObject) {
        this.getDatacentersId200ApplicationJSONObject = getDatacentersId200ApplicationJSONObject;
        return this;
    }
}