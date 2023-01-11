package openapisdk.models.operations;



public class GetApiVVersionMetalsBenchmarkSupportedResponse {
    public byte[] body;
    public GetApiVVersionMetalsBenchmarkSupportedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionMetalsBenchmarkSupportedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionMetalsBenchmarkSupportedResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionMetalsBenchmarkSupportedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getApiVVersionMetalsBenchmarkSupported200ApplicationJSONStrings;
    public GetApiVVersionMetalsBenchmarkSupportedResponse withGetApiVVersionMetalsBenchmarkSupported200ApplicationJsonStrings(String[] getApiVVersionMetalsBenchmarkSupported200ApplicationJSONStrings) {
        this.getApiVVersionMetalsBenchmarkSupported200ApplicationJSONStrings = getApiVVersionMetalsBenchmarkSupported200ApplicationJSONStrings;
        return this;
    }
}