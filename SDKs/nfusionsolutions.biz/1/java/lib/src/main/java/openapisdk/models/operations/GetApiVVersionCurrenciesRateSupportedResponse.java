package openapisdk.models.operations;



public class GetApiVVersionCurrenciesRateSupportedResponse {
    public byte[] body;
    public GetApiVVersionCurrenciesRateSupportedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionCurrenciesRateSupportedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionCurrenciesRateSupportedResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionCurrenciesRateSupportedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getApiVVersionCurrenciesRateSupported200ApplicationJSONStrings;
    public GetApiVVersionCurrenciesRateSupportedResponse withGetApiVVersionCurrenciesRateSupported200ApplicationJsonStrings(String[] getApiVVersionCurrenciesRateSupported200ApplicationJSONStrings) {
        this.getApiVVersionCurrenciesRateSupported200ApplicationJSONStrings = getApiVVersionCurrenciesRateSupported200ApplicationJSONStrings;
        return this;
    }
}