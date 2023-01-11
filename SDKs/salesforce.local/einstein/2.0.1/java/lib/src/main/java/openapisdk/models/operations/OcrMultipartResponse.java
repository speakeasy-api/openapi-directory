package openapisdk.models.operations;



public class OcrMultipartResponse {
    public String contentType;
    public OcrMultipartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OcrPredictResponse ocrPredictResponse;
    public OcrMultipartResponse withOcrPredictResponse(openapisdk.models.shared.OcrPredictResponse ocrPredictResponse) {
        this.ocrPredictResponse = ocrPredictResponse;
        return this;
    }
    public Long statusCode;
    public OcrMultipartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}