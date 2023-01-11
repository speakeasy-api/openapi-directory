package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse googleCloudDatalabelingV1beta1ListFeedbackMessagesResponse;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse withGoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse googleCloudDatalabelingV1beta1ListFeedbackMessagesResponse) {
        this.googleCloudDatalabelingV1beta1ListFeedbackMessagesResponse = googleCloudDatalabelingV1beta1ListFeedbackMessagesResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}