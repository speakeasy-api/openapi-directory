package openapisdk.models.operations;



public class DatalabelingProjectsEvaluationJobsCreateResponse {
    public String contentType;
    public DatalabelingProjectsEvaluationJobsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJob googleCloudDatalabelingV1beta1EvaluationJob;
    public DatalabelingProjectsEvaluationJobsCreateResponse withGoogleCloudDatalabelingV1beta1EvaluationJob(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJob googleCloudDatalabelingV1beta1EvaluationJob) {
        this.googleCloudDatalabelingV1beta1EvaluationJob = googleCloudDatalabelingV1beta1EvaluationJob;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsEvaluationJobsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}