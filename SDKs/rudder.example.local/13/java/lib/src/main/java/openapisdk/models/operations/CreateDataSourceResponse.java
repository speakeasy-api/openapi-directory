package openapisdk.models.operations;



public class CreateDataSourceResponse {
    public String contentType;
    public CreateDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateDataSource200ApplicationJson createDataSource200ApplicationJSONObject;
    public CreateDataSourceResponse withCreateDataSource200ApplicationJsonObject(CreateDataSource200ApplicationJson createDataSource200ApplicationJSONObject) {
        this.createDataSource200ApplicationJSONObject = createDataSource200ApplicationJSONObject;
        return this;
    }
}