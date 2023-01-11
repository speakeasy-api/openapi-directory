package openapisdk.models.operations;



public class StreamSampleResponse {
    public String contentType;
    public StreamSampleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public StreamSampleResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object problem;
    public StreamSampleResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public Long statusCode;
    public StreamSampleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> streamSample200ApplicationJSONObject;
    public StreamSampleResponse withStreamSample200ApplicationJsonObject(java.util.Map<String, Object> streamSample200ApplicationJSONObject) {
        this.streamSample200ApplicationJSONObject = streamSample200ApplicationJSONObject;
        return this;
    }
}