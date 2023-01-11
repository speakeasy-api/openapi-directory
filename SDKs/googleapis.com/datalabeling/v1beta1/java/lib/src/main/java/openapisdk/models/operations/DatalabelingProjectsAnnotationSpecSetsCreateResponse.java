package openapisdk.models.operations;



public class DatalabelingProjectsAnnotationSpecSetsCreateResponse {
    public String contentType;
    public DatalabelingProjectsAnnotationSpecSetsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet googleCloudDatalabelingV1beta1AnnotationSpecSet;
    public DatalabelingProjectsAnnotationSpecSetsCreateResponse withGoogleCloudDatalabelingV1beta1AnnotationSpecSet(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet googleCloudDatalabelingV1beta1AnnotationSpecSet) {
        this.googleCloudDatalabelingV1beta1AnnotationSpecSet = googleCloudDatalabelingV1beta1AnnotationSpecSet;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsAnnotationSpecSetsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}