package openapisdk.models.operations;



public class GetListsNamesFormatResponse {
    public String contentType;
    public GetListsNamesFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetListsNamesFormat200ApplicationJson getListsNamesFormat200ApplicationJSONObject;
    public GetListsNamesFormatResponse withGetListsNamesFormat200ApplicationJsonObject(GetListsNamesFormat200ApplicationJson getListsNamesFormat200ApplicationJSONObject) {
        this.getListsNamesFormat200ApplicationJSONObject = getListsNamesFormat200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetListsNamesFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}