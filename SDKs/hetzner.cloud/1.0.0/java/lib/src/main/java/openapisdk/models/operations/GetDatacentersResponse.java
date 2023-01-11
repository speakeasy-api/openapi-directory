package openapisdk.models.operations;



public class GetDatacentersResponse {
    public String contentType;
    public GetDatacentersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDatacentersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDatacenters200ApplicationJson getDatacenters200ApplicationJSONObject;
    public GetDatacentersResponse withGetDatacenters200ApplicationJsonObject(GetDatacenters200ApplicationJson getDatacenters200ApplicationJSONObject) {
        this.getDatacenters200ApplicationJSONObject = getDatacenters200ApplicationJSONObject;
        return this;
    }
}