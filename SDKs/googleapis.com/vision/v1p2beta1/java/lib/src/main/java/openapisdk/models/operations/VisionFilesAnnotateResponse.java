package openapisdk.models.operations;



public class VisionFilesAnnotateResponse {
    public String contentType;
    public VisionFilesAnnotateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse googleCloudVisionV1p2beta1BatchAnnotateFilesResponse;
    public VisionFilesAnnotateResponse withGoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse(openapisdk.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse googleCloudVisionV1p2beta1BatchAnnotateFilesResponse) {
        this.googleCloudVisionV1p2beta1BatchAnnotateFilesResponse = googleCloudVisionV1p2beta1BatchAnnotateFilesResponse;
        return this;
    }
    public Long statusCode;
    public VisionFilesAnnotateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}