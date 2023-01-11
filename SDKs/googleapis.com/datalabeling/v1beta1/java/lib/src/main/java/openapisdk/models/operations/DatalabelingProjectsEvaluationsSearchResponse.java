package openapisdk.models.operations;



public class DatalabelingProjectsEvaluationsSearchResponse {
    public String contentType;
    public DatalabelingProjectsEvaluationsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse googleCloudDatalabelingV1beta1SearchEvaluationsResponse;
    public DatalabelingProjectsEvaluationsSearchResponse withGoogleCloudDatalabelingV1beta1SearchEvaluationsResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse googleCloudDatalabelingV1beta1SearchEvaluationsResponse) {
        this.googleCloudDatalabelingV1beta1SearchEvaluationsResponse = googleCloudDatalabelingV1beta1SearchEvaluationsResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsEvaluationsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}