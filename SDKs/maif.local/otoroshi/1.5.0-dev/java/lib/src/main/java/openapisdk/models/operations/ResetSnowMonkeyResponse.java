package openapisdk.models.operations;



public class ResetSnowMonkeyResponse {
    public String contentType;
    public ResetSnowMonkeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Done done;
    public ResetSnowMonkeyResponse withDone(openapisdk.models.shared.Done done) {
        this.done = done;
        return this;
    }
    public Long statusCode;
    public ResetSnowMonkeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}