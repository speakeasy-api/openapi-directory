package openapisdk.models.operations;



public class VisionProjectsLocationsImagesAnnotateResponse {
    public String contentType;
    public VisionProjectsLocationsImagesAnnotateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse googleCloudVisionV1p1beta1BatchAnnotateImagesResponse;
    public VisionProjectsLocationsImagesAnnotateResponse withGoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse(openapisdk.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse googleCloudVisionV1p1beta1BatchAnnotateImagesResponse) {
        this.googleCloudVisionV1p1beta1BatchAnnotateImagesResponse = googleCloudVisionV1p1beta1BatchAnnotateImagesResponse;
        return this;
    }
    public Long statusCode;
    public VisionProjectsLocationsImagesAnnotateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}