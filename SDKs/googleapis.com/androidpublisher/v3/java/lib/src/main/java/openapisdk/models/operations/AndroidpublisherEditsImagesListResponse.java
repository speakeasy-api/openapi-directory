package openapisdk.models.operations;



public class AndroidpublisherEditsImagesListResponse {
    public String contentType;
    public AndroidpublisherEditsImagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImagesListResponse imagesListResponse;
    public AndroidpublisherEditsImagesListResponse withImagesListResponse(openapisdk.models.shared.ImagesListResponse imagesListResponse) {
        this.imagesListResponse = imagesListResponse;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsImagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}