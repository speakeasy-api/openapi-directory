package openapisdk.models.operations;



public class GetListsOverviewFormatResponse {
    public String contentType;
    public GetListsOverviewFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetListsOverviewFormat200ApplicationJson getListsOverviewFormat200ApplicationJSONObject;
    public GetListsOverviewFormatResponse withGetListsOverviewFormat200ApplicationJsonObject(GetListsOverviewFormat200ApplicationJson getListsOverviewFormat200ApplicationJSONObject) {
        this.getListsOverviewFormat200ApplicationJSONObject = getListsOverviewFormat200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetListsOverviewFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}