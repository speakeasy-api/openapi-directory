package openapisdk.models.operations;



public class AndroidpublisherEditsImagesUploadResponse {
    public String contentType;
    public AndroidpublisherEditsImagesUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImagesUploadResponse imagesUploadResponse;
    public AndroidpublisherEditsImagesUploadResponse withImagesUploadResponse(openapisdk.models.shared.ImagesUploadResponse imagesUploadResponse) {
        this.imagesUploadResponse = imagesUploadResponse;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsImagesUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}