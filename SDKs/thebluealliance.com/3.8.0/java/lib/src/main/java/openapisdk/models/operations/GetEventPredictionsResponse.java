package openapisdk.models.operations;



public class GetEventPredictionsResponse {
    public String contentType;
    public GetEventPredictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> eventPredictions;
    public GetEventPredictionsResponse withEventPredictions(java.util.Map<String, Object> eventPredictions) {
        this.eventPredictions = eventPredictions;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventPredictionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventPredictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}