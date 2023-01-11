package openapisdk.models.operations;



public class CalculateRatesResponse {
    public String contentType;
    public CalculateRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalculateRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CalculateRatesResponseBody calculateRatesResponseBody;
    public CalculateRatesResponse withCalculateRatesResponseBody(openapisdk.models.shared.CalculateRatesResponseBody calculateRatesResponseBody) {
        this.calculateRatesResponseBody = calculateRatesResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CalculateRatesResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}