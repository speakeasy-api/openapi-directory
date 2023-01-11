package openapisdk.models.operations;



public class BatchReadFileResponse {
    public openapisdk.models.shared.ComputerVisionError computerVisionError;
    public BatchReadFileResponse withComputerVisionError(openapisdk.models.shared.ComputerVisionError computerVisionError) {
        this.computerVisionError = computerVisionError;
        return this;
    }
    public String contentType;
    public BatchReadFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public BatchReadFileResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public BatchReadFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}