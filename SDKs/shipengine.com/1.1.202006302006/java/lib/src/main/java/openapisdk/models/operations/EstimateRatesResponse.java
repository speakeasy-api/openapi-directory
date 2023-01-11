package openapisdk.models.operations;



public class EstimateRatesResponse {
    public String contentType;
    public EstimateRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EstimateRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public EstimateRatesResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.Rate[] estimateRatesResponseBody;
    public EstimateRatesResponse withEstimateRatesResponseBody(openapisdk.models.shared.Rate[] estimateRatesResponseBody) {
        this.estimateRatesResponseBody = estimateRatesResponseBody;
        return this;
    }
}