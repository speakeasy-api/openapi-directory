package openapisdk.models.operations;



public class VisionProjectsLocationsFilesAnnotateResponse {
    public String contentType;
    public VisionProjectsLocationsFilesAnnotateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse googleCloudVisionV1p1beta1BatchAnnotateFilesResponse;
    public VisionProjectsLocationsFilesAnnotateResponse withGoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse(openapisdk.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse googleCloudVisionV1p1beta1BatchAnnotateFilesResponse) {
        this.googleCloudVisionV1p1beta1BatchAnnotateFilesResponse = googleCloudVisionV1p1beta1BatchAnnotateFilesResponse;
        return this;
    }
    public Long statusCode;
    public VisionProjectsLocationsFilesAnnotateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}