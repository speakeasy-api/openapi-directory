package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsCreateResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1Dataset googleCloudDatalabelingV1beta1Dataset;
    public DatalabelingProjectsDatasetsCreateResponse withGoogleCloudDatalabelingV1beta1Dataset(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1Dataset googleCloudDatalabelingV1beta1Dataset) {
        this.googleCloudDatalabelingV1beta1Dataset = googleCloudDatalabelingV1beta1Dataset;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}