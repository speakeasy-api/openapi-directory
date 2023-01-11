package openapisdk.models.operations;



public class UpdateExportConfigurationResponse {
    public String contentType;
    public UpdateExportConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateExportConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BulkexportsV1ExportConfiguration bulkexportsV1ExportConfiguration;
    public UpdateExportConfigurationResponse withBulkexportsV1ExportConfiguration(openapisdk.models.shared.BulkexportsV1ExportConfiguration bulkexportsV1ExportConfiguration) {
        this.bulkexportsV1ExportConfiguration = bulkexportsV1ExportConfiguration;
        return this;
    }
}