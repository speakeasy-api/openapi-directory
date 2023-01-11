package openapisdk.models.operations;



public class PatchBulkDataExporterConfigResponse {
    public String contentType;
    public PatchBulkDataExporterConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchBulkDataExporterConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchBulkDataExporterConfig200ApplicationJson[] patchBulkDataExporterConfig200ApplicationJSONObjects;
    public PatchBulkDataExporterConfigResponse withPatchBulkDataExporterConfig200ApplicationJsonObjects(PatchBulkDataExporterConfig200ApplicationJson[] patchBulkDataExporterConfig200ApplicationJSONObjects) {
        this.patchBulkDataExporterConfig200ApplicationJSONObjects = patchBulkDataExporterConfig200ApplicationJSONObjects;
        return this;
    }
}