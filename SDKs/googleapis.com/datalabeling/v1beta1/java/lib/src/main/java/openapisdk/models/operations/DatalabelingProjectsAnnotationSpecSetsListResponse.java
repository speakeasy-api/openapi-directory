package openapisdk.models.operations;



public class DatalabelingProjectsAnnotationSpecSetsListResponse {
    public String contentType;
    public DatalabelingProjectsAnnotationSpecSetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse googleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse;
    public DatalabelingProjectsAnnotationSpecSetsListResponse withGoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse googleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse) {
        this.googleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse = googleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsAnnotationSpecSetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}