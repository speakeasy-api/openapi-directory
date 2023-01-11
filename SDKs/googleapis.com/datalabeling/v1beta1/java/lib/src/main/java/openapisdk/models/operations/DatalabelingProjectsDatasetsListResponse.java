package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsListResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListDatasetsResponse googleCloudDatalabelingV1beta1ListDatasetsResponse;
    public DatalabelingProjectsDatasetsListResponse withGoogleCloudDatalabelingV1beta1ListDatasetsResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListDatasetsResponse googleCloudDatalabelingV1beta1ListDatasetsResponse) {
        this.googleCloudDatalabelingV1beta1ListDatasetsResponse = googleCloudDatalabelingV1beta1ListDatasetsResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}