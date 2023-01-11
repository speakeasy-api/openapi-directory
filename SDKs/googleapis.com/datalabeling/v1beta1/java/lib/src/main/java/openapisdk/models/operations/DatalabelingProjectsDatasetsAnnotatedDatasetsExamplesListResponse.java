package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListExamplesResponse googleCloudDatalabelingV1beta1ListExamplesResponse;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse withGoogleCloudDatalabelingV1beta1ListExamplesResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListExamplesResponse googleCloudDatalabelingV1beta1ListExamplesResponse) {
        this.googleCloudDatalabelingV1beta1ListExamplesResponse = googleCloudDatalabelingV1beta1ListExamplesResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}