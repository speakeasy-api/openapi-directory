package openapisdk.models.operations;



public class CompareBulkRatesResponse {
    public String contentType;
    public CompareBulkRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CompareBulkRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BulkRate[] compareBulkRatesResponseBody;
    public CompareBulkRatesResponse withCompareBulkRatesResponseBody(openapisdk.models.shared.BulkRate[] compareBulkRatesResponseBody) {
        this.compareBulkRatesResponseBody = compareBulkRatesResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CompareBulkRatesResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}