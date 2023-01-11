package openapisdk.models.operations;



public class GeneratePartialYaraRuleResponse {
    public byte[] body;
    public GeneratePartialYaraRuleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GeneratePartialYaraRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GeneratePartialYaraRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}