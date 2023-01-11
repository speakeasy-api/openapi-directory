package openapisdk.models.operations;



public class DetectMultipartResponse {
    public String contentType;
    public DetectMultipartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObjectDetectionResponse objectDetectionResponse;
    public DetectMultipartResponse withObjectDetectionResponse(openapisdk.models.shared.ObjectDetectionResponse objectDetectionResponse) {
        this.objectDetectionResponse = objectDetectionResponse;
        return this;
    }
    public Long statusCode;
    public DetectMultipartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}