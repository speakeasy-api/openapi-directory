package openapisdk.models.operations;



public class FetchExportResponse {
    public String contentType;
    public FetchExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BulkexportsV1Export bulkexportsV1Export;
    public FetchExportResponse withBulkexportsV1Export(openapisdk.models.shared.BulkexportsV1Export bulkexportsV1Export) {
        this.bulkexportsV1Export = bulkexportsV1Export;
        return this;
    }
}