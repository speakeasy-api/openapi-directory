package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse googleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse withGoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse googleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse) {
        this.googleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse = googleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}