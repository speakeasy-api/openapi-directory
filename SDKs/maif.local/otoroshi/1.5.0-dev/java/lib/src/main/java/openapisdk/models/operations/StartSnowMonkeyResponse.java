package openapisdk.models.operations;



public class StartSnowMonkeyResponse {
    public String contentType;
    public StartSnowMonkeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Done done;
    public StartSnowMonkeyResponse withDone(openapisdk.models.shared.Done done) {
        this.done = done;
        return this;
    }
    public Long statusCode;
    public StartSnowMonkeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}