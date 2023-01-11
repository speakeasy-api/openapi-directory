package openapisdk.models.operations;



public class GetEnvironmentResponse {
    public String contentType;
    public GetEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getEnvironment200ApplicationJSONObject;
    public GetEnvironmentResponse withGetEnvironment200ApplicationJsonObject(java.util.Map<String, Object> getEnvironment200ApplicationJSONObject) {
        this.getEnvironment200ApplicationJSONObject = getEnvironment200ApplicationJSONObject;
        return this;
    }
    public Object problemDetail;
    public GetEnvironmentResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
}