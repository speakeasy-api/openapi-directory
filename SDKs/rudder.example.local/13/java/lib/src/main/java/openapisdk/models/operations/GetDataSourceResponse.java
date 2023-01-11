package openapisdk.models.operations;



public class GetDataSourceResponse {
    public String contentType;
    public GetDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDataSource200ApplicationJson getDataSource200ApplicationJSONObject;
    public GetDataSourceResponse withGetDataSource200ApplicationJsonObject(GetDataSource200ApplicationJson getDataSource200ApplicationJSONObject) {
        this.getDataSource200ApplicationJSONObject = getDataSource200ApplicationJSONObject;
        return this;
    }
}