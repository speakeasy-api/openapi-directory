package openapisdk.models.operations;



public class ImportScanDataResponse {
    public String contentType;
    public ImportScanDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportScanDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public ImportScanDataResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}