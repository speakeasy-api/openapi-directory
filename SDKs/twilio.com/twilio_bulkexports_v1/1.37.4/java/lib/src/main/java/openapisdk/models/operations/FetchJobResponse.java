package openapisdk.models.operations;



public class FetchJobResponse {
    public String contentType;
    public FetchJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BulkexportsV1ExportJob bulkexportsV1ExportJob;
    public FetchJobResponse withBulkexportsV1ExportJob(openapisdk.models.shared.BulkexportsV1ExportJob bulkexportsV1ExportJob) {
        this.bulkexportsV1ExportJob = bulkexportsV1ExportJob;
        return this;
    }
}