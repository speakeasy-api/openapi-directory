package openapisdk.models.operations;



public class UploadImageResponse {
    public openapisdk.models.shared.ComputerVisionImageCreateResponse computerVisionImageCreateResponse;
    public UploadImageResponse withComputerVisionImageCreateResponse(openapisdk.models.shared.ComputerVisionImageCreateResponse computerVisionImageCreateResponse) {
        this.computerVisionImageCreateResponse = computerVisionImageCreateResponse;
        return this;
    }
    public String contentType;
    public UploadImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UploadImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}