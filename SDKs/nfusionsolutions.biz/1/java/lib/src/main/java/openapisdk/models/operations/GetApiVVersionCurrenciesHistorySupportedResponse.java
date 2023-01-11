package openapisdk.models.operations;



public class GetApiVVersionCurrenciesHistorySupportedResponse {
    public byte[] body;
    public GetApiVVersionCurrenciesHistorySupportedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionCurrenciesHistorySupportedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionCurrenciesHistorySupportedResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionCurrenciesHistorySupportedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getApiVVersionCurrenciesHistorySupported200ApplicationJSONStrings;
    public GetApiVVersionCurrenciesHistorySupportedResponse withGetApiVVersionCurrenciesHistorySupported200ApplicationJsonStrings(String[] getApiVVersionCurrenciesHistorySupported200ApplicationJSONStrings) {
        this.getApiVVersionCurrenciesHistorySupported200ApplicationJSONStrings = getApiVVersionCurrenciesHistorySupported200ApplicationJSONStrings;
        return this;
    }
}