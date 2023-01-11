package openapisdk.models.operations;



public class StreamFilterResponse {
    public String contentType;
    public StreamFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public StreamFilterResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object problem;
    public StreamFilterResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public Long statusCode;
    public StreamFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> streamFilter200ApplicationJSONObject;
    public StreamFilterResponse withStreamFilter200ApplicationJsonObject(java.util.Map<String, Object> streamFilter200ApplicationJSONObject) {
        this.streamFilter200ApplicationJSONObject = streamFilter200ApplicationJSONObject;
        return this;
    }
}