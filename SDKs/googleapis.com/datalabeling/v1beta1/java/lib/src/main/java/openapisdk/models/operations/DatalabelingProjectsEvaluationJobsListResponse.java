package openapisdk.models.operations;



public class DatalabelingProjectsEvaluationJobsListResponse {
    public String contentType;
    public DatalabelingProjectsEvaluationJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse googleCloudDatalabelingV1beta1ListEvaluationJobsResponse;
    public DatalabelingProjectsEvaluationJobsListResponse withGoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse googleCloudDatalabelingV1beta1ListEvaluationJobsResponse) {
        this.googleCloudDatalabelingV1beta1ListEvaluationJobsResponse = googleCloudDatalabelingV1beta1ListEvaluationJobsResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsEvaluationJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}