package openapisdk.models.operations;



public class CreateScanResponse {
    public String contentType;
    public CreateScanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateScanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public CreateScanResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}