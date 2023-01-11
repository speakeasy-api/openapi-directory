package openapisdk.models.operations;



public class DatalabelingProjectsEvaluationJobsPatchResponse {
    public String contentType;
    public DatalabelingProjectsEvaluationJobsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJob googleCloudDatalabelingV1beta1EvaluationJob;
    public DatalabelingProjectsEvaluationJobsPatchResponse withGoogleCloudDatalabelingV1beta1EvaluationJob(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJob googleCloudDatalabelingV1beta1EvaluationJob) {
        this.googleCloudDatalabelingV1beta1EvaluationJob = googleCloudDatalabelingV1beta1EvaluationJob;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsEvaluationJobsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}