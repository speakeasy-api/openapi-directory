package openapisdk.models.operations;



public class VisionImagesAnnotateResponse {
    public String contentType;
    public VisionImagesAnnotateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse googleCloudVisionV1p2beta1BatchAnnotateImagesResponse;
    public VisionImagesAnnotateResponse withGoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse(openapisdk.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse googleCloudVisionV1p2beta1BatchAnnotateImagesResponse) {
        this.googleCloudVisionV1p2beta1BatchAnnotateImagesResponse = googleCloudVisionV1p2beta1BatchAnnotateImagesResponse;
        return this;
    }
    public Long statusCode;
    public VisionImagesAnnotateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}