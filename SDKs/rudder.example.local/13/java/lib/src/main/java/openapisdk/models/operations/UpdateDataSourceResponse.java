package openapisdk.models.operations;



public class UpdateDataSourceResponse {
    public String contentType;
    public UpdateDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateDataSource200ApplicationJson updateDataSource200ApplicationJSONObject;
    public UpdateDataSourceResponse withUpdateDataSource200ApplicationJsonObject(UpdateDataSource200ApplicationJson updateDataSource200ApplicationJSONObject) {
        this.updateDataSource200ApplicationJSONObject = updateDataSource200ApplicationJSONObject;
        return this;
    }
}