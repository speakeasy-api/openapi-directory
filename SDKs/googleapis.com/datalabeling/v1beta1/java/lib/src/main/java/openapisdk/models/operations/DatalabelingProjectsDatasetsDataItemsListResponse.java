package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsDataItemsListResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsDataItemsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListDataItemsResponse googleCloudDatalabelingV1beta1ListDataItemsResponse;
    public DatalabelingProjectsDatasetsDataItemsListResponse withGoogleCloudDatalabelingV1beta1ListDataItemsResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListDataItemsResponse googleCloudDatalabelingV1beta1ListDataItemsResponse) {
        this.googleCloudDatalabelingV1beta1ListDataItemsResponse = googleCloudDatalabelingV1beta1ListDataItemsResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsDataItemsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}