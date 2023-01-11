package openapisdk.models.operations;



public class ApplyYaraRulesResponse {
    public byte[] body;
    public ApplyYaraRulesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ApplyYaraRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApplyYaraRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}