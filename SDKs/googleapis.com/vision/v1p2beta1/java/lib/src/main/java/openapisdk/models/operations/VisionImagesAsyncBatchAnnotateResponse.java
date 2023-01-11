package openapisdk.models.operations;



public class VisionImagesAsyncBatchAnnotateResponse {
    public String contentType;
    public VisionImagesAsyncBatchAnnotateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public VisionImagesAsyncBatchAnnotateResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public VisionImagesAsyncBatchAnnotateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}