package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse googleCloudDatalabelingV1beta1ListFeedbackThreadsResponse;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse withGoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse googleCloudDatalabelingV1beta1ListFeedbackThreadsResponse) {
        this.googleCloudDatalabelingV1beta1ListFeedbackThreadsResponse = googleCloudDatalabelingV1beta1ListFeedbackThreadsResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}