package openapisdk.models.operations;



public class VisionProjectsLocationsImagesAsyncBatchAnnotateResponse {
    public String contentType;
    public VisionProjectsLocationsImagesAsyncBatchAnnotateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public VisionProjectsLocationsImagesAsyncBatchAnnotateResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public VisionProjectsLocationsImagesAsyncBatchAnnotateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}