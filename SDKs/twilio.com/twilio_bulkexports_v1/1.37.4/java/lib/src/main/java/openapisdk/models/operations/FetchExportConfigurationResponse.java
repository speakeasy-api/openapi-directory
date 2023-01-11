package openapisdk.models.operations;



public class FetchExportConfigurationResponse {
    public String contentType;
    public FetchExportConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchExportConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BulkexportsV1ExportConfiguration bulkexportsV1ExportConfiguration;
    public FetchExportConfigurationResponse withBulkexportsV1ExportConfiguration(openapisdk.models.shared.BulkexportsV1ExportConfiguration bulkexportsV1ExportConfiguration) {
        this.bulkexportsV1ExportConfiguration = bulkexportsV1ExportConfiguration;
        return this;
    }
}