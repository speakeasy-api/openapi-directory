package openapisdk.models.operations;



public class GetApiVVersionMetalsSupportedCurrencyResponse {
    public byte[] body;
    public GetApiVVersionMetalsSupportedCurrencyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionMetalsSupportedCurrencyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionMetalsSupportedCurrencyResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionMetalsSupportedCurrencyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getApiVVersionMetalsSupportedCurrency200ApplicationJSONStrings;
    public GetApiVVersionMetalsSupportedCurrencyResponse withGetApiVVersionMetalsSupportedCurrency200ApplicationJsonStrings(String[] getApiVVersionMetalsSupportedCurrency200ApplicationJSONStrings) {
        this.getApiVVersionMetalsSupportedCurrency200ApplicationJSONStrings = getApiVVersionMetalsSupportedCurrency200ApplicationJSONStrings;
        return this;
    }
}