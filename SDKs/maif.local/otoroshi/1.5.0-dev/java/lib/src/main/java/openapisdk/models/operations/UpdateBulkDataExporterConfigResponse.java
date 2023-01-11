package openapisdk.models.operations;



public class UpdateBulkDataExporterConfigResponse {
    public String contentType;
    public UpdateBulkDataExporterConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateBulkDataExporterConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateBulkDataExporterConfig200ApplicationJson[] updateBulkDataExporterConfig200ApplicationJSONObjects;
    public UpdateBulkDataExporterConfigResponse withUpdateBulkDataExporterConfig200ApplicationJsonObjects(UpdateBulkDataExporterConfig200ApplicationJson[] updateBulkDataExporterConfig200ApplicationJSONObjects) {
        this.updateBulkDataExporterConfig200ApplicationJSONObjects = updateBulkDataExporterConfig200ApplicationJSONObjects;
        return this;
    }
}