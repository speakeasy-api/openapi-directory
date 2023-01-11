package openapisdk.models.operations;



public class VisionProjectsLocationsFilesAnnotateResponse {
    public String contentType;
    public VisionProjectsLocationsFilesAnnotateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse googleCloudVisionV1p2beta1BatchAnnotateFilesResponse;
    public VisionProjectsLocationsFilesAnnotateResponse withGoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse(openapisdk.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse googleCloudVisionV1p2beta1BatchAnnotateFilesResponse) {
        this.googleCloudVisionV1p2beta1BatchAnnotateFilesResponse = googleCloudVisionV1p2beta1BatchAnnotateFilesResponse;
        return this;
    }
    public Long statusCode;
    public VisionProjectsLocationsFilesAnnotateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}