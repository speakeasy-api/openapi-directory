package openapisdk.models.operations;



public class StopSnowMonkeyResponse {
    public String contentType;
    public StopSnowMonkeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Done done;
    public StopSnowMonkeyResponse withDone(openapisdk.models.shared.Done done) {
        this.done = done;
        return this;
    }
    public Long statusCode;
    public StopSnowMonkeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}