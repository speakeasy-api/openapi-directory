package openapisdk.models.operations;



public class GetSpotListsResponse {
    public String contentType;
    public GetSpotListsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSpotListsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSpotLists200ApplicationJson getSpotLists200ApplicationJSONObject;
    public GetSpotListsResponse withGetSpotLists200ApplicationJsonObject(GetSpotLists200ApplicationJson getSpotLists200ApplicationJSONObject) {
        this.getSpotLists200ApplicationJSONObject = getSpotLists200ApplicationJSONObject;
        return this;
    }
}