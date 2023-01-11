package openapisdk.models.operations;



public class RecognizeTextResponse {
    public openapisdk.models.shared.ComputerVisionError computerVisionError;
    public RecognizeTextResponse withComputerVisionError(openapisdk.models.shared.ComputerVisionError computerVisionError) {
        this.computerVisionError = computerVisionError;
        return this;
    }
    public String contentType;
    public RecognizeTextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RecognizeTextResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RecognizeTextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}