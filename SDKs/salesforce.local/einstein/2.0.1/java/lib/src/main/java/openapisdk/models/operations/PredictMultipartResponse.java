package openapisdk.models.operations;



public class PredictMultipartResponse {
    public String contentType;
    public PredictMultipartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageClassificationResponse imageClassificationResponse;
    public PredictMultipartResponse withImageClassificationResponse(openapisdk.models.shared.ImageClassificationResponse imageClassificationResponse) {
        this.imageClassificationResponse = imageClassificationResponse;
        return this;
    }
    public Long statusCode;
    public PredictMultipartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}