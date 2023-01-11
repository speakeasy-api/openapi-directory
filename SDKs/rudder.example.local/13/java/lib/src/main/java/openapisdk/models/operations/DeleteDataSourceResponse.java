package openapisdk.models.operations;



public class DeleteDataSourceResponse {
    public String contentType;
    public DeleteDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteDataSource200ApplicationJson deleteDataSource200ApplicationJSONObject;
    public DeleteDataSourceResponse withDeleteDataSource200ApplicationJsonObject(DeleteDataSource200ApplicationJson deleteDataSource200ApplicationJSONObject) {
        this.deleteDataSource200ApplicationJSONObject = deleteDataSource200ApplicationJSONObject;
        return this;
    }
}