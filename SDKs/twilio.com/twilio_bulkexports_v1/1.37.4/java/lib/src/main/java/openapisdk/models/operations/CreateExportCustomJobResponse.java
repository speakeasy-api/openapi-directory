package openapisdk.models.operations;



public class CreateExportCustomJobResponse {
    public String contentType;
    public CreateExportCustomJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateExportCustomJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BulkexportsV1ExportExportCustomJob bulkexportsV1ExportExportCustomJob;
    public CreateExportCustomJobResponse withBulkexportsV1ExportExportCustomJob(openapisdk.models.shared.BulkexportsV1ExportExportCustomJob bulkexportsV1ExportExportCustomJob) {
        this.bulkexportsV1ExportExportCustomJob = bulkexportsV1ExportExportCustomJob;
        return this;
    }
}