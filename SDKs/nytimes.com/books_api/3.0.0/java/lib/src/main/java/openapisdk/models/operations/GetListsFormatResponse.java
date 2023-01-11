package openapisdk.models.operations;



public class GetListsFormatResponse {
    public String contentType;
    public GetListsFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetListsFormat200ApplicationJson getListsFormat200ApplicationJSONObject;
    public GetListsFormatResponse withGetListsFormat200ApplicationJsonObject(GetListsFormat200ApplicationJson getListsFormat200ApplicationJSONObject) {
        this.getListsFormat200ApplicationJSONObject = getListsFormat200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetListsFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}