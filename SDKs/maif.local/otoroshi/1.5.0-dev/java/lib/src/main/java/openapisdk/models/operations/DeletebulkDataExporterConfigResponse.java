package openapisdk.models.operations;



public class DeletebulkDataExporterConfigResponse {
    public String contentType;
    public DeletebulkDataExporterConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeletebulkDataExporterConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeletebulkDataExporterConfig200ApplicationJson[] deletebulkDataExporterConfig200ApplicationJSONObjects;
    public DeletebulkDataExporterConfigResponse withDeletebulkDataExporterConfig200ApplicationJsonObjects(DeletebulkDataExporterConfig200ApplicationJson[] deletebulkDataExporterConfig200ApplicationJSONObjects) {
        this.deletebulkDataExporterConfig200ApplicationJSONObjects = deletebulkDataExporterConfig200ApplicationJSONObjects;
        return this;
    }
}