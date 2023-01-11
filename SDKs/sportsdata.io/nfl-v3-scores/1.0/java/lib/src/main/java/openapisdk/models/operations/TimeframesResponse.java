package openapisdk.models.operations;



public class TimeframesResponse {
    public String contentType;
    public TimeframesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TimeframesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] timeframes;
    public TimeframesResponse withTimeframes(Object[] timeframes) {
        this.timeframes = timeframes;
        return this;
    }
}