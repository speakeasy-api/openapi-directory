package openapisdk.models.operations;



public class CreateBulkDataExporterConfigsResponse {
    public String contentType;
    public CreateBulkDataExporterConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBulkDataExporterConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateBulkDataExporterConfigs200ApplicationJson[] createBulkDataExporterConfigs200ApplicationJSONObjects;
    public CreateBulkDataExporterConfigsResponse withCreateBulkDataExporterConfigs200ApplicationJsonObjects(CreateBulkDataExporterConfigs200ApplicationJson[] createBulkDataExporterConfigs200ApplicationJSONObjects) {
        this.createBulkDataExporterConfigs200ApplicationJSONObjects = createBulkDataExporterConfigs200ApplicationJSONObjects;
        return this;
    }
}