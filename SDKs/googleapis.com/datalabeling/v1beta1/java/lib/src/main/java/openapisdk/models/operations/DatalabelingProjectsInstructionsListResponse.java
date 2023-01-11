package openapisdk.models.operations;



public class DatalabelingProjectsInstructionsListResponse {
    public String contentType;
    public DatalabelingProjectsInstructionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListInstructionsResponse googleCloudDatalabelingV1beta1ListInstructionsResponse;
    public DatalabelingProjectsInstructionsListResponse withGoogleCloudDatalabelingV1beta1ListInstructionsResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListInstructionsResponse googleCloudDatalabelingV1beta1ListInstructionsResponse) {
        this.googleCloudDatalabelingV1beta1ListInstructionsResponse = googleCloudDatalabelingV1beta1ListInstructionsResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsInstructionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}