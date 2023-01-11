package openapisdk.models.operations;



public class DownloadUsageHistoryResponse {
    public String contentType;
    public DownloadUsageHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String downloadUsageHistory200TextCsvString;
    public DownloadUsageHistoryResponse withDownloadUsageHistory200TextCsvString(String downloadUsageHistory200TextCsvString) {
        this.downloadUsageHistory200TextCsvString = downloadUsageHistory200TextCsvString;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseSchema errorResponseSchema;
    public DownloadUsageHistoryResponse withErrorResponseSchema(openapisdk.models.shared.ErrorResponseSchema errorResponseSchema) {
        this.errorResponseSchema = errorResponseSchema;
        return this;
    }
    public Long statusCode;
    public DownloadUsageHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}