package openapisdk.models.operations;



public class FetchDayResponse {
    public String contentType;
    public FetchDayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BulkexportsV1ExportDayInstance bulkexportsV1ExportDayInstance;
    public FetchDayResponse withBulkexportsV1ExportDayInstance(openapisdk.models.shared.BulkexportsV1ExportDayInstance bulkexportsV1ExportDayInstance) {
        this.bulkexportsV1ExportDayInstance = bulkexportsV1ExportDayInstance;
        return this;
    }
}