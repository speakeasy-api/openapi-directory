package openapisdk.models.operations;



public class VisionProjectsLocationsFilesAsyncBatchAnnotateResponse {
    public String contentType;
    public VisionProjectsLocationsFilesAsyncBatchAnnotateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public VisionProjectsLocationsFilesAsyncBatchAnnotateResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public VisionProjectsLocationsFilesAsyncBatchAnnotateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}