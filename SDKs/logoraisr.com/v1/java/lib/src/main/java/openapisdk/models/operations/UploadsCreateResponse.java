package openapisdk.models.operations;



public class UploadsCreateResponse {
    public String contentType;
    public UploadsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileResponse fileResponse;
    public UploadsCreateResponse withFileResponse(openapisdk.models.shared.FileResponse fileResponse) {
        this.fileResponse = fileResponse;
        return this;
    }
    public Long statusCode;
    public UploadsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}