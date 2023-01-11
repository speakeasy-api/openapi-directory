package openapisdk.models.operations;



public class GetApiVVersionCurrenciesSummarySupportedResponse {
    public byte[] body;
    public GetApiVVersionCurrenciesSummarySupportedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionCurrenciesSummarySupportedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionCurrenciesSummarySupportedResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionCurrenciesSummarySupportedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getApiVVersionCurrenciesSummarySupported200ApplicationJSONStrings;
    public GetApiVVersionCurrenciesSummarySupportedResponse withGetApiVVersionCurrenciesSummarySupported200ApplicationJsonStrings(String[] getApiVVersionCurrenciesSummarySupported200ApplicationJSONStrings) {
        this.getApiVVersionCurrenciesSummarySupported200ApplicationJSONStrings = getApiVVersionCurrenciesSummarySupported200ApplicationJSONStrings;
        return this;
    }
}