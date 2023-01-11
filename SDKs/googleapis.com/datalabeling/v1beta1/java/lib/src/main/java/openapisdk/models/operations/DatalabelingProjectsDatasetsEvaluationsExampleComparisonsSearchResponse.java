package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse googleCloudDatalabelingV1beta1SearchExampleComparisonsResponse;
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse withGoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse googleCloudDatalabelingV1beta1SearchExampleComparisonsResponse) {
        this.googleCloudDatalabelingV1beta1SearchExampleComparisonsResponse = googleCloudDatalabelingV1beta1SearchExampleComparisonsResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}