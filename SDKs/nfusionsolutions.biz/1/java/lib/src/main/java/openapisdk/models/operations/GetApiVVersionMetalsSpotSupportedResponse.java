package openapisdk.models.operations;



public class GetApiVVersionMetalsSpotSupportedResponse {
    public byte[] body;
    public GetApiVVersionMetalsSpotSupportedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionMetalsSpotSupportedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionMetalsSpotSupportedResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionMetalsSpotSupportedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getApiVVersionMetalsSpotSupported200ApplicationJSONStrings;
    public GetApiVVersionMetalsSpotSupportedResponse withGetApiVVersionMetalsSpotSupported200ApplicationJsonStrings(String[] getApiVVersionMetalsSpotSupported200ApplicationJSONStrings) {
        this.getApiVVersionMetalsSpotSupported200ApplicationJSONStrings = getApiVVersionMetalsSpotSupported200ApplicationJSONStrings;
        return this;
    }
}