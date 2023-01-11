package openapisdk.models.operations;



public class UploadBlobByIdResponse {
    public String contentType;
    public UploadBlobByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UploadBlobByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}