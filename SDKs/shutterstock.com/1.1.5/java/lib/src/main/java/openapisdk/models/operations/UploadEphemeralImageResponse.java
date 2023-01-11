package openapisdk.models.operations;



public class UploadEphemeralImageResponse {
    public String contentType;
    public UploadEphemeralImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageCreateResponse imageCreateResponse;
    public UploadEphemeralImageResponse withImageCreateResponse(openapisdk.models.shared.ImageCreateResponse imageCreateResponse) {
        this.imageCreateResponse = imageCreateResponse;
        return this;
    }
    public Long statusCode;
    public UploadEphemeralImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}